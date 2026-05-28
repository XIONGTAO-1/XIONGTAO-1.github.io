import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import styles from "./styles.css?raw";

describe("technical animator portfolio", () => {
  it("uses the real contact links", () => {
    expect(profile.email).toBe("niexiongtao@163.com");
    expect(profile.linkedinUrl).toBe("https://www.linkedin.com/in/xiongtao-nie-ff6166/");
    expect(profile.photoUrl).toBe("/media/IMG_5168.jpg");
    expect(profile.about).toContain("School of Sino-Korea New Media");
    expect(profile.about).toContain("Bachelor of Arts");
    expect(profile.about).toContain("Bachelor of Engineering");
    expect(profile.about).toContain("MSc in Computer Animation and Visual Effects");
  });

  it("uses the requested work order and project videos", () => {
    const expectedWork = [
      {
        title: "Mocap Data Processing Tool",
        year: "2026",
        videoUrls: ["https://www.youtube.com/embed/AUMnX986lz0"]
      },
      {
        title: "FK/IK Matching Tool",
        year: "2026",
        videoUrls: ["https://www.youtube.com/embed/T3YWadIG2ZY"]
      },
      {
        title: "Deer Character Rig",
        year: "2026",
        videoUrls: ["https://www.youtube.com/embed/MK-bLhXMIt8"]
      },
      {
        title: "Subway Surfers Internship Rigging & Animation",
        year: "2023",
        videoUrls: ["https://www.youtube.com/embed/5mQ_Seq5At4"]
      },
      {
        title: "Prop Art",
        year: "2025",
        videoUrls: [
          "https://www.youtube.com/embed/atgUZYZBNzo",
          "https://www.youtube.com/embed/3k-FLueGN-0"
        ]
      }
    ];

    expect(projects).toHaveLength(expectedWork.length);
    expectedWork.forEach((expected, index) => {
      expect(projects[index].title).toBe(expected.title);
      expect(projects[index].year).toBe(expected.year);
      expect(projects[index].videos.map((video) => video.url)).toEqual(expected.videoUrls);
    });

    const propArt = projects.at(-1);
    expect(propArt?.videos).toHaveLength(2);
    expect(propArt?.videos.every((video) => video.autoplayOnOpen)).toBe(true);
  });

  it("renders the English hero, portrait, about copy, and primary hiring links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /technical animator \/ character rigger/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(profile.tagline)).toBeInTheDocument();
    expect(screen.getByAltText(`${profile.name} portrait`)).toHaveAttribute("src", profile.photoUrl);
    expect(screen.queryByTitle(/demo reel/i)).not.toBeInTheDocument();
    expect(screen.getByText(/School of Sino-Korea New Media/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /resume/i })[0]).toHaveAttribute(
      "href",
      profile.resumeUrl
    );
    expect(screen.getAllByRole("link", { name: /email/i })[0]).toHaveAttribute(
      "href",
      `mailto:${profile.email}`
    );
    expect(screen.getAllByRole("link", { name: /linkedin/i })[0]).toHaveAttribute(
      "href",
      profile.linkedinUrl
    );
  });

  it("renders the requested five-item media wall", () => {
    render(<App />);

    expect(projects).toHaveLength(5);

    const wall = screen.getByRole("list", { name: /portfolio projects/i });
    const cards = within(wall).getAllByRole("listitem");

    expect(cards).toHaveLength(projects.length);
    projects.forEach((project, index) => {
      const card = within(cards[index]);
      expect(card.getByRole("button", { name: new RegExp(project.title, "i") })).toBeInTheDocument();
      expect(card.getByText(project.role)).toBeInTheDocument();
      expect(card.getAllByText(project.category).length).toBeGreaterThan(0);
      expect(card.queryByRole("img")).not.toBeInTheDocument();
    });
  });

  it("opens and closes a simplified same-page project detail panel", async () => {
    const user = userEvent.setup();
    render(<App />);

    const project = projects[0];
    await user.click(screen.getByRole("button", { name: new RegExp(project.title, "i") }));

    const dialog = screen.getByRole("dialog", { name: new RegExp(project.title, "i") });
    expect(within(dialog).getByRole("heading", { name: /overview/i })).toBeInTheDocument();
    expect(within(dialog).getByText(project.overview)).toBeInTheDocument();
    expect(within(dialog).getByText(project.details[0])).toBeInTheDocument();
    expect(within(dialog).queryByRole("heading", { name: /problem/i })).not.toBeInTheDocument();
    expect(within(dialog).queryByRole("heading", { name: /contribution/i })).not.toBeInTheDocument();
    expect(within(dialog).queryByRole("heading", { name: /technical breakdown/i })).not.toBeInTheDocument();
    expect(within(dialog).queryByRole("heading", { name: /outcome/i })).not.toBeInTheDocument();
    const iframe = within(dialog).getByTitle(new RegExp(`${project.videos[0].title} video`, "i"));
    expect(iframe).toHaveAttribute("src", project.videos[0].url);

    await user.click(within(dialog).getByRole("button", { name: /close project detail/i }));
    expect(screen.queryByRole("dialog", { name: new RegExp(project.title, "i") })).not.toBeInTheDocument();
  });

  it("uses the new English project overview copy", () => {
    const mocap = projects.find((project) => project.id === "mocap-data-processing-tool");
    const fkik = projects.find((project) => project.id === "fkik-matching-tool");
    const deer = projects.find((project) => project.id === "deer-character-rig");
    const subway = projects.find((project) => project.id === "subway-surfers-internship");
    const propArt = projects.find((project) => project.id === "prop-art");

    expect(mocap?.overview).toContain("Seamless Loop Tool");
    expect(mocap?.details.join(" ")).toContain("Hip Y-axis");
    expect(fkik?.overview).toContain("Universal FK/IK Matching Tool");
    expect(fkik?.details.join(" ")).toContain("Blend Joints");
    expect(deer?.details.join(" ")).toContain("Spline IK");
    expect(deer?.details.join(" ")).toContain("without third-party plugins");
    expect(subway?.details.join(" ")).toContain("Rigging & Skinning");
    expect(subway?.details.join(" ")).toContain("Workflow Optimization");
    expect(propArt?.overview).toContain("PBR production workflow");
    expect(propArt?.process).toEqual([
      "Maya modeling",
      "ZBrush sculpting",
      "Substance Painter texturing",
      "Maya Arnold rendering"
    ]);

    projects.forEach((project) => {
      expect(Object.hasOwn(project, "problem")).toBe(false);
      expect(Object.hasOwn(project, "contribution")).toBe(false);
      expect(Object.hasOwn(project, "technicalBreakdown")).toBe(false);
      expect(Object.hasOwn(project, "outcome")).toBe(false);
    });
  });

  it("opens Prop Art as one detail panel with two autoplaying muted videos", async () => {
    const user = userEvent.setup();
    render(<App />);

    const project = projects.find((item) => item.id === "prop-art");
    expect(project).toBeDefined();

    await user.click(screen.getByRole("button", { name: new RegExp(project!.title, "i") }));

    const dialog = screen.getByRole("dialog", { name: new RegExp(project!.title, "i") });
    const frames = project!.videos.map((video) =>
      within(dialog).getByTitle(new RegExp(`${video.title} video`, "i"))
    );

    expect(frames).toHaveLength(2);
    frames.forEach((frame) => {
      const src = frame.getAttribute("src") ?? "";
      expect(src).toContain("autoplay=1");
      expect(src).toContain("mute=1");
      expect(src).toContain("playsinline=1");
    });
    expect(within(dialog).getByText(/Maya modeling/i)).toBeInTheDocument();
    expect(within(dialog).getByText(/Maya Arnold rendering/i)).toBeInTheDocument();
  });

  it("uses a wide desktop hero with a large circular portrait", () => {
    expect(styles).toContain("width: min(1240px, calc(100% - 80px));");
    expect(styles).toContain("grid-template-columns: minmax(0, 600px) minmax(430px, 520px);");
    expect(styles).toContain("gap: 48px;");
    expect(styles).toContain("justify-content: center;");
    expect(styles).toContain("justify-items: end;");
    expect(styles).toContain("width: clamp(430px, 36vw, 520px);");
  });

  it("uses readable abstract work cards and vertical multi-video dialogs", () => {
    expect(styles).not.toContain(".project-card img");
    expect(styles).toContain(".project-card-marker");
    expect(styles).toContain("background: linear-gradient(145deg, #151a23 0%, #0d1118 58%, #080a0f 100%);");
    expect(styles).toContain(".dialog-media-grid.multi");
    expect(styles).toContain("grid-template-columns: 1fr;");
  });
});

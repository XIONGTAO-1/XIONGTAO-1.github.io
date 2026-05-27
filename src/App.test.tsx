import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { profile } from "./data/profile";
import { projects } from "./data/projects";

describe("technical animator portfolio", () => {
  it("uses the real contact links", () => {
    expect(profile.email).toBe("niexiongtao@163.com");
    expect(profile.linkedinUrl).toBe("https://www.linkedin.com/in/xiongtao-nie-ff6166/");
  });

  it("uses the real work videos provided for the portfolio wall", () => {
    const expectedWork = [
      {
        title: "Deer Character Rig",
        videoUrl: "https://www.youtube.com/embed/MK-bLhXMIt8"
      },
      {
        title: "Mocap Data Processing Tool",
        videoUrl: "https://www.youtube.com/embed/AUMnX986lz0"
      },
      {
        title: "FK/IK Matching Tool",
        videoUrl: "https://www.youtube.com/embed/T3YWadIG2ZY"
      },
      {
        title: "Subway Surfers Internship Rigging & Animation",
        videoUrl: "https://www.youtube.com/embed/5mQ_Seq5At4"
      },
      {
        title: "Stylized Prop Modeling & Texture Study",
        videoUrl: "https://www.youtube.com/embed/atgUZYZBNzo"
      },
      {
        title: "Rendered Prop Art Study",
        videoUrl: "https://www.youtube.com/embed/3k-FLueGN-0"
      }
    ];

    expect(projects).toHaveLength(expectedWork.length);
    expectedWork.forEach((expected, index) => {
      expect(projects[index]).toMatchObject(expected);
    });
    expect(profile.reelUrl).toBe(expectedWork[0].videoUrl);
  });

  it("renders the English hero, reel, and primary hiring links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /technical animator \/ character rigger/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(profile.tagline)).toBeInTheDocument();
    expect(screen.getByTitle(/demo reel/i)).toHaveAttribute("src", profile.reelUrl);
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

  it("renders a media wall with 6 to 12 portfolio projects", () => {
    render(<App />);

    expect(projects.length).toBeGreaterThanOrEqual(6);
    expect(projects.length).toBeLessThanOrEqual(12);

    const wall = screen.getByRole("list", { name: /portfolio projects/i });
    const cards = within(wall).getAllByRole("listitem");

    expect(cards).toHaveLength(projects.length);
    projects.forEach((project, index) => {
      const card = within(cards[index]);
      expect(card.getByRole("button", { name: new RegExp(project.title, "i") })).toBeInTheDocument();
      expect(card.getByText(project.role)).toBeInTheDocument();
      expect(card.getByText(project.category)).toBeInTheDocument();
    });
  });

  it("opens and closes a same-page project detail panel", async () => {
    const user = userEvent.setup();
    render(<App />);

    const project = projects[0];
    await user.click(screen.getByRole("button", { name: new RegExp(project.title, "i") }));

    const dialog = screen.getByRole("dialog", { name: new RegExp(project.title, "i") });
    expect(within(dialog).getByText(project.problem)).toBeInTheDocument();
    expect(within(dialog).getByText(project.contribution)).toBeInTheDocument();
    expect(within(dialog).getByTitle(new RegExp(`${project.title} video`, "i"))).toHaveAttribute(
      "src",
      project.videoUrl
    );

    await user.click(within(dialog).getByRole("button", { name: /close project detail/i }));
    expect(screen.queryByRole("dialog", { name: new RegExp(project.title, "i") })).not.toBeInTheDocument();
  });
});

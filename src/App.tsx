import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Linkedin,
  Mail,
  Wrench,
  X
} from "lucide-react";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import type { Project, ProjectVideo } from "./types";

const skillGroups = [
  {
    label: "Rigging",
    items: ["Character rigs", "FK/IK systems", "Space switching", "Facial controls"]
  },
  {
    label: "Technical Animation",
    items: ["Foot lock cleanup", "Root motion", "Retargeting", "Secondary motion"]
  },
  {
    label: "Tools & Pipeline",
    items: ["Maya Python", "MotionBuilder", "FBX validation", "Unreal workflows"]
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  const categories = useMemo(
    () => Array.from(new Set(projects.map((project) => project.category))),
    []
  );

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Portfolio header">
        <a className="brand" href="#top" aria-label={`${profile.name} portfolio home`}>
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Game animation systems / character rigging</p>
            <h1 id="hero-title">{profile.title}</h1>
            <p className="tagline">{profile.tagline}</p>
            <p className="availability">{profile.location}</p>
            <div className="hero-actions" aria-label="Primary contact links">
              <a className="button button-primary" href={profile.resumeUrl}>
                <Download size={18} aria-hidden="true" />
                Resume
              </a>
              <a className="button" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                Email
              </a>
              <a className="icon-link" href={profile.linkedinUrl} aria-label="LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-portrait-panel" aria-label={`${profile.name} portrait`}>
            <img className="hero-portrait" src={profile.photoUrl} alt={`${profile.name} portrait`} />
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-title">
          <p className="eyebrow">Education & training</p>
          <h2 id="about-title">Creative pipeline foundation, technical production focus</h2>
          <p>{profile.about}</p>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Animation, rigging, and pipeline projects</h2>
            </div>
            <div className="category-strip" aria-label="Project categories">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>

          <ul className="project-grid" aria-label="Portfolio projects">
            {projects.map((project, index) => (
              <li key={project.id}>
                <button
                  className="project-card"
                  data-category={project.category}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open ${project.title} project details`}
                >
                  <span className="project-card-marker" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-card-content">
                    <span className="project-meta">
                      <span>{project.category}</span>
                      {project.year ? <span>{project.year}</span> : null}
                    </span>
                    <span className="project-title-row">
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                    <span className="project-role">{project.role}</span>
                    <span className="project-summary">{project.summary}</span>
                    <span className="tool-row" aria-label={`${project.title} tools`}>
                      {project.tools.slice(0, 4).map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading compact">
            <p className="eyebrow">Technical focus</p>
            <h2 id="skills-title">Built for production handoff</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-panel" key={group.label}>
                <div className="skill-panel-heading">
                  <Wrench size={18} aria-hidden="true" />
                  <h3>{group.label}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>{profile.name}</h2>
          <p>Open to technical animation, rigging, and gameplay animation pipeline roles.</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </a>
          <a href={profile.linkedinUrl}>
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={profile.resumeUrl}>
            <Download size={18} aria-hidden="true" />
            Resume
          </a>
        </div>
      </footer>

      {selectedProject ? (
        <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </div>
  );
}

type ProjectDialogProps = {
  project: Project;
  onClose: () => void;
};

function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  if (project.detailMode === "image-only") {
    return (
      <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
        <section
          className="project-dialog image-only-dialog"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <button className="close-button" type="button" onClick={onClose} aria-label="Close project detail">
            <X size={22} aria-hidden="true" />
          </button>

          <div className="concept-gallery">
            {project.images?.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="close-button" type="button" onClick={onClose} aria-label="Close project detail">
          <X size={22} aria-hidden="true" />
        </button>

        <div className={project.videos.length > 1 ? "dialog-media-grid multi" : "dialog-media-grid"}>
          {project.videos.map((video) => (
            <div className="dialog-media" key={video.url}>
              <iframe
                title={`${video.title} video`}
                src={getVideoSrc(video)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <div className="dialog-content">
          <p className="eyebrow">{project.category}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="dialog-role">{project.role}</p>

          <div className="dialog-section">
            <h3>Overview</h3>
            <p>{project.overview}</p>
          </div>

          <div className="dialog-section">
            <h3>{project.process ? "Production Process" : "Details"}</h3>
            <ul>
              {project.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {project.process ? (
            <div className="dialog-section">
              <h3>Pipeline</h3>
              <ol className="process-list">
                {project.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          ) : null}

          <div className="dialog-tools" aria-label={`${project.title} tools`}>
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function getVideoSrc(video: ProjectVideo) {
  if (!video.autoplayOnOpen) {
    return video.url;
  }

  const separator = video.url.includes("?") ? "&" : "?";
  return `${video.url}${separator}autoplay=1&mute=1&playsinline=1`;
}

export default App;

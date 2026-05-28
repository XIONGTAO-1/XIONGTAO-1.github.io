import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "mocap-data-processing-tool",
    title: "Mocap Data Processing Tool",
    role: "Technical Animator / Tool Developer",
    year: "2026",
    category: "Tools",
    tools: ["Python", "Mocap Cleanup", "Animation Pipeline", "Batch Processing"],
    summary: "Tooling workflow for processing motion-capture data and reducing repetitive cleanup steps.",
    thumbnail: "/media/mocap-tool.svg",
    videos: [
      {
        title: "Mocap Data Processing Tool",
        url: "https://www.youtube.com/embed/AUMnX986lz0"
      }
    ],
    problem:
      "Raw mocap data often requires repeated cleanup and preparation before it can be reviewed or handed to animation.",
    contribution:
      "Designed and built a processing tool that streamlines mocap data preparation and makes the workflow easier to repeat.",
    technicalBreakdown: [
      "Organized the tool around practical animation data cleanup tasks.",
      "Reduced manual setup by grouping repeated processing steps into a clearer workflow.",
      "Presented the tool behavior through a direct screen-recorded breakdown."
    ],
    outcome:
      "Created a portfolio-ready technical animation tool that shows pipeline thinking and practical workflow automation."
  },
  {
    id: "fkik-matching-tool",
    title: "FK/IK Matching Tool",
    role: "Rigging Tool Developer",
    year: "2026",
    category: "Tools",
    tools: ["Maya", "Python", "FK/IK Matching", "Animation Workflow"],
    summary: "Animator support tool for matching FK and IK poses during rig interaction and animation cleanup.",
    thumbnail: "/media/fkik-match.svg",
    videos: [
      {
        title: "FK/IK Matching Tool",
        url: "https://www.youtube.com/embed/T3YWadIG2ZY"
      }
    ],
    problem:
      "Switching between FK and IK can interrupt animation work when poses do not align cleanly across control modes.",
    contribution:
      "Built an FK/IK matching tool that helps preserve pose continuity and supports faster animation iteration.",
    technicalBreakdown: [
      "Matched control transforms between FK and IK states for cleaner mode switching.",
      "Focused the interface on the specific actions animators need during pose cleanup.",
      "Demonstrated the workflow through a concise tool breakdown video."
    ],
    outcome:
      "Improved the usability story of the rigging toolset and showed practical support for animator workflows."
  },
  {
    id: "deer-character-rig",
    title: "Deer Character Rig",
    role: "Character Rigger",
    year: "2026",
    category: "Rigging",
    tools: ["Maya", "Character Rigging", "Skinning", "Deformation"],
    summary: "Quadruped deer rig focused on animator-friendly body controls, deformation, and readable motion tests.",
    thumbnail: "/media/deer-rig.svg",
    videos: [
      {
        title: "Deer Character Rig",
        url: "https://www.youtube.com/embed/MK-bLhXMIt8"
      }
    ],
    problem:
      "The deer character needed a stable quadruped rig that could support clear posing, natural body mechanics, and clean deformation.",
    contribution:
      "Built the character rig, organized animator controls, tested deformation quality, and prepared the setup for animation review.",
    technicalBreakdown: [
      "Structured body, leg, neck, and head controls around readable quadruped posing.",
      "Balanced skin weights and deformation behavior for bending limbs and body motion.",
      "Prepared a video breakdown that shows the rig controls and character movement clearly."
    ],
    outcome:
      "Delivered a rig presentation that demonstrates quadruped rigging ability and production-oriented control design."
  },
  {
    id: "subway-surfers-internship",
    title: "Subway Surfers Internship Rigging & Animation",
    role: "Rigging / Animation Intern",
    year: "2023",
    category: "Gameplay Animation",
    tools: ["Game Animation", "Rigging", "Character Setup", "Production Support"],
    summary: "Rigging and animation work completed during a Subway Surfers internship.",
    thumbnail: "/media/subway-internship.svg",
    videos: [
      {
        title: "Subway Surfers Internship Rigging and Animation",
        url: "https://www.youtube.com/embed/5mQ_Seq5At4"
      }
    ],
    problem:
      "The internship work required production-minded rigging and animation support for stylized game content.",
    contribution:
      "Contributed rigging and animation tasks during the Subway Surfers internship and prepared the work for portfolio review.",
    technicalBreakdown: [
      "Supported stylized game character and animation production needs.",
      "Worked with production constraints where clarity, speed, and consistency matter.",
      "Presented selected internship work in a short-form video format."
    ],
    outcome:
      "Shows real production exposure and applied rigging/animation experience in a recognizable game context."
  },
  {
    id: "prop-art",
    title: "Prop Art",
    role: "Prop Artist",
    year: "2025",
    category: "Prop Art",
    tools: ["Modeling", "Substance Painter", "Lookdev", "Arnold Renderer"],
    summary: "Two prop art studies covering modeling, Substance Painter texture work, lookdev, and Arnold rendering.",
    thumbnail: "/media/prop-study-a.svg",
    videos: [
      {
        title: "Prop Art Study One",
        url: "https://www.youtube.com/embed/atgUZYZBNzo",
        autoplayOnOpen: true
      },
      {
        title: "Prop Art Study Two",
        url: "https://www.youtube.com/embed/3k-FLueGN-0",
        autoplayOnOpen: true
      }
    ],
    problem:
      "The prop studies needed to show the asset process from model construction to final textured and rendered presentation.",
    contribution:
      "Modeled the props, painted textures in Substance Painter, handled look development, and rendered the final presentations with Arnold.",
    technicalBreakdown: [
      "Built the prop models with readable forms for close-up portfolio presentation.",
      "Painted textures in Substance Painter to support stylized material definition and surface variation.",
      "Set up Arnold renders to show the final assets clearly across both studies."
    ],
    outcome:
      "Combines both prop videos into one project and demonstrates asset creation range beyond rigging, including modeling, texturing, and final render presentation."
  }
];

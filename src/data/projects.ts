import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "mocap-data-processing-tool",
    title: "Mocap Data Processing Tool",
    role: "Technical Animator / Tool Developer",
    year: "2026",
    category: "Tools",
    tools: ["Python", "MotionBuilder", "Mocap Cleanup", "Loop Detection"],
    summary: "Seamless Loop Tool for detecting, trimming, blending, and exporting loopable mocap locomotion.",
    thumbnail: "/media/mocap-tool.svg",
    videos: [
      {
        title: "Mocap Data Processing Tool",
        url: "https://www.youtube.com/embed/AUMnX986lz0"
      }
    ],
    overview:
      "The Seamless Loop Tool automatically identifies the best walk or run segment inside a motion-capture clip, then trims, blends, and exports it as an animation that can loop indefinitely in a game engine.",
    details: [
      "The detection logic is based on a biomechanical gait signal: during walking, the Hip Y-axis height rises and falls in a periodic pattern.",
      "Double-support moments place the body weight between both feet, producing Hip-height valleys; single-support moments lift the body over the support leg, producing peaks.",
      "By reading those peaks and valleys, the tool can locate candidate gait cycles and prepare cleaner loop boundaries with less manual searching."
    ]
  },
  {
    id: "fkik-matching-tool",
    title: "FK/IK Matching Tool",
    role: "Rigging Tool Developer",
    year: "2026",
    category: "Tools",
    tools: ["Maya", "Python", "FK/IK Matching", "Animation Workflow"],
    summary: "Universal FK/IK matching support for stable mode switching on common three-chain rigs.",
    thumbnail: "/media/fkik-match.svg",
    videos: [
      {
        title: "FK/IK Matching Tool",
        url: "https://www.youtube.com/embed/T3YWadIG2ZY"
      }
    ],
    overview:
      "The Universal FK/IK Matching Tool provides stable FK/IK alignment for common three-chain rigs in Maya, helping animators switch control modes with minimal popping.",
    details: [
      "The tool does not try to solve FK/IK from scratch; it solves the practical production problem of moving the inactive control set into the position and orientation needed to inherit the current pose.",
      "Instead of guessing the rig's internal logic, it treats the Blend Joints as the final pose ground truth.",
      "Because the Blend chain is typically the skeleton chain that drives skinning and represents the visible character pose, aligning the target controls to that chain preserves visual continuity during mode switches."
    ]
  },
  {
    id: "deer-character-rig",
    title: "Deer Character Rig",
    role: "Character Rigger",
    year: "2026",
    category: "Rigging",
    tools: ["Maya", "Spline IK", "FK/IK Limbs", "Manual Rigging"],
    summary: "Fully hand-built quadruped rig covering body, neck, limb, deformation, and basic facial controls.",
    thumbnail: "/media/deer-rig.svg",
    videos: [
      {
        title: "Deer Character Rig",
        url: "https://www.youtube.com/embed/MK-bLhXMIt8"
      }
    ],
    overview:
      "A manually built deer character rig designed to support clear quadruped posing, readable deformation, and practical animation testing without relying on third-party rigging plugins.",
      details: [
        "The rigging system includes a Spline IK spine and neck setup for smooth body and head motion.",
        "Traditional FK/IK limb systems support posing flexibility for the four legs.",
        "The setup also includes basic facial controls and deformation work, with all systems built by hand without third-party plugins."
      ]
  },
  {
    id: "blendmatrix-2d-lookat",
    title: "BlendMatrix 2D LookAt",
    role: "Rigging Tool Developer",
    year: "2026",
    category: "Rigging",
    tools: ["Maya", "Matrix Rigging", "blendMatrix", "offsetParentMatrix"],
    summary: "Manual 2D controller and distance falloff setup for matrix-based eye LookAt behavior.",
    thumbnail: "/media/fkik-match.svg",
    videos: [
      {
        title: "BlendMatrix 2D LookAt",
        url: "https://www.youtube.com/embed/QLUyJhRw0dY"
      }
    ],
    overview:
      "This is not a traditional automatic Aim system. It is a matrix LookAt setup built from a manual 2D controller and distance falloff, giving the animator direct control while still blending the driven eye behavior through matrices.",
    details: [
      "The Controller Object local translateX and translateY values are converted into directional weights for Up, Down, Left, and Right.",
      "Those weights blend five reference pose matrices: Base, Up, Down, Left, and Right.",
      "The same controller's world-space distance controls the overall follow strength, so the LookAt response fades as the controller moves farther away.",
      "When the controller is too far from the eye, blendMatrix.envelope gradually falls to 0, and the final blended matrix is written directly into the Driven Object.offsetParentMatrix."
    ]
  },
  {
    id: "subway-surfers-internship",
    title: "Subway Surfers Internship Rigging & Animation",
    role: "Rigging / Animation Intern",
    year: "2023",
    category: "Gameplay Animation",
    tools: ["Game Animation", "Rigging", "Skinning", "Production Support"],
    summary: "Rigging, skinning, animation, and asset delivery work completed during a Subway Surfers internship.",
    thumbnail: "/media/subway-internship.svg",
    videos: [
      {
        title: "Subway Surfers Internship Rigging and Animation",
        url: "https://www.youtube.com/embed/5mQ_Seq5At4"
      }
    ],
    overview:
      "Internship production work focused on rigging, skinning, animation design, and asset delivery support for stylized Subway Surfers content.",
    details: [
      "Rigging & Skinning: Executed precise bone rigging for characters and props, including skateboards and back accessories, achieving seamless skeletal transitions and lifelike dynamic effects.",
      "Animation Design: Crafted diverse animation sets, including locomotion and interactions, with attention to rhythm and game feel to strengthen visual appeal and player engagement.",
      "Workflow Optimization: Streamlined asset delivery by overseeing rendering and sequence frame output while maintaining high-fidelity visual quality.",
      "Collaborated with the art team to refine character dynamics, directly contributing to the polished look of the project's visual assets."
    ]
  },
  {
    id: "secondary-motion-physics-simulator",
    title: "Secondary Motion Physics Simulator",
    role: "Technical Animator / Simulation Tool Developer",
    year: "2026",
    category: "Technical Animation",
    tools: [
      "Python 3.13",
      "PySide6",
      "Modern OpenGL",
      "GLSL 4.1",
      "ncca-ngl",
      "NumPy",
      "Verlet-style Simulation"
    ],
    summary: "Standalone Python application for simulating ribbon and tail secondary motion with a custom physics solver.",
    thumbnail: "/media/mocap-tool.svg",
    videos: [
      {
        title: "Secondary Motion Physics Simulator",
        url: "https://www.youtube.com/embed/JmpCWAGyeAI"
      }
    ],
    overview:
      "This standalone application simulates complex secondary motion dynamics, such as ribbons and tails, through a custom-built physics engine.",
    details: [
      "I engineered an iterative solver from scratch to calculate forces including gravity, damping, and soft distance constraints using vector arithmetic and NumPy for efficiency.",
      "The visualization pipeline is built on Modern OpenGL Core Profile 4.1 and PySide6, using the ncca-ngl library for robust vector handling and graphics utilities.",
      "I implemented custom GLSL vertex and fragment shaders with dynamic VBO updates for high-performance rendering.",
      "The project demonstrates practical work in computational geometry, simulation algorithms, physics simulation, and direct integration of graphics APIs with Python."
    ]
  },
  {
    id: "prop-art",
    title: "Prop Art",
    role: "Prop Artist",
    year: "2025",
    category: "Prop Art",
    tools: ["Maya", "ZBrush", "Substance Painter", "Arnold Renderer"],
    summary: "Two prop studies following a PBR workflow from modeling and sculpting through texturing and rendering.",
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
    overview:
      "Two prop art studies built through a PBR production workflow, from asset construction and sculpt refinement to texture authoring and final rendering.",
    details: [
      "The assets were modeled in Maya, refined with ZBrush sculpting, textured in Substance Painter, and rendered in Maya with Arnold.",
      "The focus was on showing a complete prop pipeline with readable forms, controlled materials, and clean final presentation."
    ],
    process: [
      "Maya modeling",
      "ZBrush sculpting",
      "Substance Painter texturing",
      "Maya Arnold rendering"
    ]
  },
  {
    id: "concept-design",
    title: "Concept Design",
    role: "Concept Designer",
    year: "2024",
    category: "Concept Design",
    tools: ["Photoshop", "Visual Development", "Character Design", "Storytelling"],
    summary: "Four concept design boards presented in the original PSD sequence.",
    thumbnail: "/media/concept-design-01.jpg",
    videos: [],
    images: [
      {
        src: "/media/concept-design-01.jpg",
        alt: "Concept Design board 01"
      },
      {
        src: "/media/concept-design-02.jpg",
        alt: "Concept Design board 02"
      },
      {
        src: "/media/concept-design-03.jpg",
        alt: "Concept Design board 03"
      },
      {
        src: "/media/concept-design-04.jpg",
        alt: "Concept Design board 04"
      }
    ],
    overview: "",
    details: [],
    detailMode: "image-only"
  }
];

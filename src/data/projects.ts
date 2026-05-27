import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "combat-rig-system",
    title: "Combat Character Rig System",
    role: "Character Rigger / Technical Animator",
    year: "2026",
    category: "Rigging",
    tools: ["Maya", "Python", "Unreal Engine", "Control Rig"],
    summary: "Modular biped rig with animator-facing controls for melee timing, weapon arcs, and reliable export.",
    thumbnail: "/media/combat-rig.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    problem:
      "Animators needed a combat rig that could handle fast weapon changes, readable poses, and consistent game export without extra cleanup.",
    contribution:
      "Designed the control layout, authored space switching, built export validation, and tested the rig through attack combo animation passes.",
    technicalBreakdown: [
      "Built FK/IK limb switching with match helpers for combat pose iteration.",
      "Added weapon socket controls and export checks for skeleton naming, scale, and baked channels.",
      "Prepared Unreal-friendly animation clips with clean root motion and reduced curve noise."
    ],
    outcome:
      "Reduced rig cleanup time and gave animators a more predictable control set for fast melee iteration."
  },
  {
    id: "locomotion-loop-cleanup",
    title: "Locomotion Loop Cleanup",
    role: "Technical Animator",
    year: "2026",
    category: "Technical Animation",
    tools: ["MotionBuilder", "Maya", "Python", "Unreal Engine"],
    summary: "Foot-lock and root-motion cleanup workflow for walk, run, and strafe animation loops.",
    thumbnail: "/media/locomotion-loop.svg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    problem:
      "In-place locomotion cycles had support-foot sliding and inconsistent root curves after retargeting.",
    contribution:
      "Created a cleanup pass that detects contact ranges, stabilizes planted feet, and exports loop-ready clips.",
    technicalBreakdown: [
      "Used ankle and toe velocity thresholds to identify support phases.",
      "Applied foot effector constraints during contact windows and plotted the result back to skeleton.",
      "Smoothed root and reference curves while preserving hip motion and readable body mechanics."
    ],
    outcome:
      "Produced cleaner loops that preview reliably in engine and require less manual foot-slide correction."
  },
  {
    id: "facial-rig-prototype",
    title: "Facial Rig Prototype",
    role: "Rigging Artist",
    year: "2025",
    category: "Rigging",
    tools: ["Maya", "Python", "Blend Shapes", "Pose Editor"],
    summary: "Lightweight facial rig prototype built for expressive game-ready dialogue tests.",
    thumbnail: "/media/facial-rig.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    problem:
      "The character needed a compact facial setup that supported readable expressions without a heavy simulation pipeline.",
    contribution:
      "Built the blend shape organization, animator controls, mirroring helpers, and test poses for dialogue beats.",
    technicalBreakdown: [
      "Separated broad expression shapes from corrective detail shapes for cleaner authoring.",
      "Added symmetric and asymmetric controls for brows, eyes, cheeks, jaw, and mouth corners.",
      "Created naming and export checks so the rig could move cleanly between Maya and engine tests."
    ],
    outcome:
      "Delivered a controllable facial prototype suitable for fast acting tests and later production expansion."
  },
  {
    id: "animation-export-toolkit",
    title: "Animation Export Toolkit",
    role: "Pipeline Tool Developer",
    year: "2025",
    category: "Pipeline",
    tools: ["Maya", "Python", "PySide", "FBX"],
    summary: "Batch export tool for validating clips, frame ranges, naming, skeleton state, and FBX output.",
    thumbnail: "/media/export-toolkit.svg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    problem:
      "Animation exports were inconsistent across scenes, causing avoidable engine import errors and late-stage rework.",
    contribution:
      "Designed a compact artist-facing exporter with scene checks, batch clip presets, and actionable error messages.",
    technicalBreakdown: [
      "Validated skeleton selection, namespace state, frame ranges, and root naming before export.",
      "Saved reusable clip presets per scene to keep repeated exports consistent.",
      "Surfaced blocking issues before FBX generation so artists could fix scenes without technical support."
    ],
    outcome:
      "Made animation handoff more repeatable and reduced preventable FBX import failures."
  },
  {
    id: "creature-secondary-motion",
    title: "Creature Secondary Motion",
    role: "Technical Animator",
    year: "2025",
    category: "Technical Animation",
    tools: ["Maya", "Unreal Engine", "Anim Dynamics", "Control Rig"],
    summary: "Secondary motion setup for tails, straps, and armor pieces with engine-friendly controls.",
    thumbnail: "/media/secondary-motion.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    problem:
      "The creature needed layered secondary motion that stayed stable during aggressive gameplay movement.",
    contribution:
      "Built the setup, tuned constraints, authored animation tests, and documented animator override controls.",
    technicalBreakdown: [
      "Created control groups for procedural motion with animator override channels.",
      "Tuned damping and limits for high-speed turns, jumps, and impact poses.",
      "Separated simulation-friendly joints from core deformation controls for safer iteration."
    ],
    outcome:
      "Added more life to the character while keeping motion stable enough for real-time gameplay tests."
  },
  {
    id: "retargeting-debug-viewer",
    title: "Retargeting Debug Viewer",
    role: "Technical Animator / Tools",
    year: "2025",
    category: "Tools",
    tools: ["Unreal Engine", "Python", "Maya", "IK Retargeter"],
    summary: "Debug workflow for comparing source and target skeleton motion during retargeting.",
    thumbnail: "/media/retargeting-debug.svg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    problem:
      "Retargeted clips were hard to evaluate because joint offsets and contact errors were only visible after import.",
    contribution:
      "Created a review workflow that highlights skeleton differences, contact drift, and root-motion mismatches.",
    technicalBreakdown: [
      "Compared source and target skeleton landmarks to locate proportion-related motion issues.",
      "Reviewed foot contact and root trajectories before final clip approval.",
      "Documented retargeting presets for repeated character families."
    ],
    outcome:
      "Shortened retarget review time and made animation quality issues easier to discuss with artists."
  },
  {
    id: "gameplay-animation-set",
    title: "Gameplay Animation Set",
    role: "Gameplay Technical Animator",
    year: "2024",
    category: "Gameplay Animation",
    tools: ["Maya", "Unreal Engine", "Animation Blueprint"],
    summary: "Playable movement and interaction set focused on clear silhouettes and implementation constraints.",
    thumbnail: "/media/gameplay-set.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    problem:
      "The prototype needed movement clips that were readable in gameplay and compatible with the existing controller.",
    contribution:
      "Animated core clips, prepared exports, and tuned implementation notes for transitions and blend behavior.",
    technicalBreakdown: [
      "Authored starts, stops, turns, idles, and interaction clips around controller timing requirements.",
      "Checked silhouettes from gameplay camera angles instead of only animation viewport angles.",
      "Coordinated export naming and frame ranges for clean animation blueprint integration."
    ],
    outcome:
      "Delivered a cohesive gameplay set that supported quick implementation and clearer player feedback."
  },
  {
    id: "rig-health-checker",
    title: "Rig Health Checker",
    role: "Rigging Tools Developer",
    year: "2024",
    category: "Tools",
    tools: ["Maya", "Python", "PySide"],
    summary: "Maya validation panel for detecting broken constraints, locked channels, and export blockers.",
    thumbnail: "/media/rig-health.svg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    problem:
      "Small rigging issues were often discovered after animation had already started, making fixes more expensive.",
    contribution:
      "Built a checker that reports common rig health issues and gives artists a clear list of fixes before handoff.",
    technicalBreakdown: [
      "Checked control visibility, locked attributes, missing constraints, scale values, and naming patterns.",
      "Grouped warnings by severity so blockers were visible before cosmetic issues.",
      "Kept the UI minimal so riggers could run it repeatedly during iteration."
    ],
    outcome:
      "Caught rig issues earlier and improved confidence before handing rigs to animation."
  }
];

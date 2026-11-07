import type { CertificateItem, CategoryType } from "../types/certificates";

export const certificateData: CertificateItem[] = [
  {
    title: "UniLab Acceleration Program",
    subtitle: "Frontend Developer Certificate",
    category: "Camps & Workshops",
    description:
      "Engineered responsive UI components and delivered client-facing web applications. Applied GitFlow branching, handled complex bug fixes, and participated in daily Agile standups and peer code reviews.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitFlow",
      "Bug Fixes",
      "Code Review",
    ],
    image: "/images/unilab.png",
  },
  {
    title: "Drone Swarm Choreography System",
    subtitle: "Autonomous 3D UAV Swarm Control",
    category: "Awards & Projects",
    awardBadge: "Certificate Coming Soon",
    isPending: true,
    description:
      "Engineered real-time 3D trajectory tracking and optimal collision-free assignment for 200 simulated drones using computer vision and numerical optimization.",
    tags: [
      "Python",
      "OpenCV",
      "SciPy",
      "NumPy",
      "Hungarian Algorithm",
      "RK4 Kinematics",
    ],
    image: "images/certificate-python-1.jpg",
  },
  {
    title: "Modeling of Volumetric Geometrical Objects",
    subtitle: "V International Scientific Conference (London)",
    category: "Conferences",
    description:
      "Presented research on complex 3D volumetric geometric structures, spatial positioning equations, and CAD-based mathematical modeling methodologies.",
    tags: ["AutoCAD", "3D Modeling", "Computational Geometry", "Applied Math"],
    image: "/images/london.jfif",
  },
  {
    title: "Catalogue of Mechanisms via Transition-Inversion",
    subtitle: "V International Scientific Conference (Boston)",
    category: "Conferences",
    description:
      "Researched geometric transition-inversion techniques to catalog complex motion mechanisms using advanced CAD systems and graphic editors.",
    tags: ["AutoCAD", "Kinematics", "Graphic Editors", "Parametric Design"],
    image: "/images/boston.jfif",
  },
  {
    title: "AI Summer Camp",
    subtitle: "Collaborative Software Development",
    category: "Camps & Workshops",
    description:
      "Developed software solutions integrating AI agents, LLM APIs, and prompt workflows while collaborating in agile team sprints.",
    tags: [
      "AI Agents",
      "LLM Integration",
      "Prompt Engineering",
      "Agile Development",
    ],
    image: "/images/Ai-camp.png",
  },
  {
    title: "Hinge-Lever Inverter Device",
    subtitle: "Scientific Research | Printing & Instrument Engineering",
    category: "Conferences",
    description:
      "Co-authored scientific research on the design and kinematic principles of a hinge-lever inverter device based on geometric inversion. Explored its mechanical structure, motion coordination, and practical applications in sheet-fed printing presses, instrument engineering, and geographical coordinate determination.",
    tags: [
      "Scientific Research",
      "Mechanical Engineering",
      "Kinematics",
      "Mathematical Modeling",
    ],
    image: "/images/certificate-boston-2026.jpeg",
  },
  {
    title: "Public Speaking Winter Youth Camp",
    subtitle: "Leadership & Communication Workshop",
    category: "Camps & Workshops",
    awardBadge: "Certificate Coming Soon",
    isPending: true,
    description:
      "Mastered technical presentation techniques, leadership dynamics, and structured argumentation for complex project defenses.",
    tags: [
      "Technical Speaking",
      "Leadership",
      "Project Defense",
      "Communication",
    ],
    image: "/images/public-speaking.jpg",
  },
];

export const categories: CategoryType[] = [
  "All",
  "Camps & Workshops",
  "Awards & Projects",
  "Conferences",
];

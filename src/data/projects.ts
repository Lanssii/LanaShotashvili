import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "cocktail-website",
    title: "Cocktail Website",
    description:
      "An immersive mixology platform engineered to showcase advanced GSAP animations, fluid scroll triggers, and complex motion physics. Built to demonstrate high-level interactive front-end development and performance optimization.",
    tags: ["React", "GSAP", "Tailwind CSS"],
    link: "https://cocktail-website-gsap-drab.vercel.app/",
    image: "/images/cocktail.png",
  },

  {
    id: "restaurant-bistro-bliss",
    title: "Restaurant Bistro Bliss",
    description:
      "A responsive multi-page restaurant platform featuring real-time REST API integration with TheMealDB and TheCocktailDB. Engineered with dynamic content filtering, asynchronous data normalization, custom form validation logic, and client-side persistence via LocalStorage.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs"],
    link: "https://food-website-theta-seven.vercel.app/",
    image: "/images/food-website.png",
  },

  {
    id: "tbilo-aI-camp",
    title: "Tbilo AI Camp",
    description:
      "A landing page for an AI hackathon, initially AI-generated and then heavily refactored with custom front-end logic and refined UI design. Upgraded to eliminate typical AI artifacts and deliver a polished, production-ready aesthetic.",
    tags: ["JavaScript", "CSS"],
    link: "https://tbilo-ai-camp.vercel.app/",
    image: "/images/tbilo.png",
  },
  {
    id: "crypto-realtime-dashboard",
    title: "Crypto Real-Time Dashboard",
    description:
      "A high-performance real-time cryptocurrency dashboard engineered for direct Binance WebSocket API streaming without page refreshes. Features automated reconnect lifecycles, dynamic threshold-based alert engines with duplicate prevention via refs, live session price history charts using Recharts, custom SVG sparklines, dynamic currency conversion, and client-side persistence.",
    tags: [
      "React",
      "WebSockets",
      "Recharts",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
    link: "https://crypto-exchange-dashboard-woad.vercel.app/",
    image: "/images/crypto.png",
  },
  {
    id: "shop-co",
    title: "Shop.co",
    description:
      "An e-commerce landing page built for the technical assessment phase of the UniLab React Acceleration Program. Successfully passed both this layout challenge and the live coding interview, leading to my current role at UniLab.",
    tags: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    link: "https://lanssii.github.io/shop.co/",
    image: "/images/shop-co.png",
  },
  {
    id: "react-hook-form-validation",
    title: "React Hook Form Validation",
    description:
      "A dedicated authentication playground built to showcase production-grade form handling. Integrates React Hook Form with Zod schema validation for strict type safety, real-time error handling, and clean state management.",
    tags: ["React", "React Hook Form", "Zod", "Tailwind CSS"],
    link: "https://react-hook-form-validation.vercel.app/",
    image: "/images/form-validation.png",
  },
  {
    id: "photosnap-website",
    title: "Photosnap Website",
    description:
      "A multi-page React application built as an academy assessment project to showcase scalable project architecture. Demonstrates clean separation of concerns with dedicated view pages, reusable layout components, isolated CSS modules, and custom feature tables.",
    tags: ["React", "CSS Modules", "Vite", "React Router"],
    link: "https://photosnap-website-react.vercel.app/",
    image: "/images/photo-snap.png",
  },
];

import { projects } from "../data/projects";

export default function Projects() {
  const [featuredProject, ...gridProjects] = projects;

  return (
    <section className="bg-[#FFF8E5] w-full py-20 px-4 md:px-[50px] flex justify-center border-b border-[#d6d3cc]/50">
      <div className="w-full max-w-[1350px]">
        <div className="flex justify-between items-center mb-10 md:mb-16">
          <span className="font-[Amiko] font-bold text-[#F28C38] text-[10px] md:text-xs uppercase tracking-[0.2em]">
            Selected Work
          </span>
        </div>

        <h2 className="font-[Anton] text-[60px] sm:text-[80px] md:text-[110px] leading-[0.85] uppercase text-[#234A5C] tracking-tight mb-12 md:mb-20">
          Projects
        </h2>

        <div className="flex flex-col gap-10 md:gap-16">
          {/* Big project */}
          <div className="group flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <a
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full lg:w-[60%] aspect-[4/3] lg:aspect-[16/10] rounded-3xl overflow-hidden bg-[#e8e1d5]"
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </a>

            {/* Marketing Text */}
            <div className="w-full lg:w-[40%] flex flex-col items-start lg:pl-6">
              <h3 className="font-[Anton] text-[32px] md:text-[45px] lg:text-[50px] leading-[1.05] uppercase text-[#234A5C] mb-4">
                Creating websites that{" "}
                <span className="text-[#F28C38]">put you ahead</span> of
                competitors.
              </h3>

              <div className="mb-4">
                <span className="block font-[Amiko] text-[#F28C38] text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold mb-1">
                  {featuredProject.subtitle || "Featured Project"}
                </span>
                <h4 className="font-[Anton] text-[#234A5C] text-2xl md:text-3xl uppercase tracking-wide">
                  {featuredProject.title}
                </h4>
              </div>

              <p className="font-[Amiko] text-[#234A5C] text-sm md:text-base leading-relaxed mb-6 opacity-80">
                {featuredProject.description}
              </p>

              <div className="w-full border-t border-[#d6d3cc] pt-4 mb-6 flex flex-wrap gap-x-3 gap-y-2">
                {featuredProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-[Amiko] text-[#234A5C]/70 text-[10px] md:text-xs font-bold uppercase tracking-widest"
                  >
                    {tag} {idx !== featuredProject.tags.length - 1 && "/"}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-[Amiko] font-bold text-[#F28C38] uppercase tracking-widest text-xs md:text-sm hover:text-[#234A5C] transition-colors group/link"
              >
                Visit Website
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* All [Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {gridProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white/40 border border-[#d6d3cc] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#234A5C]/30"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-[220px] md:h-[260px] overflow-hidden bg-[#e8e1d5] block"
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </a>

                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  {project.subtitle && (
                    <span className="block font-[Amiko] text-[#F28C38] text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-bold mb-1">
                      {project.subtitle}
                    </span>
                  )}

                  {/* Project name */}
                  <h3 className="font-[Anton] text-[#234A5C] text-xl md:text-2xl uppercase tracking-wide leading-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="font-[Amiko] text-[#234A5C]/70 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-[Amiko] bg-[#234A5C]/5 text-[#234A5C] px-2 py-1 rounded text-[9px] md:text-[10px] font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full border-t border-[#d6d3cc] pt-4 font-[Amiko] font-bold text-[#234A5C] hover:text-[#F28C38] uppercase tracking-widest text-[10px] md:text-xs transition-colors"
                  >
                    Visit Website
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

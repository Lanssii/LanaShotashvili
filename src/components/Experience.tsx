import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#3F605D] w-full py-20 md:py-32 px-4 md:px-[50px] flex justify-center relative overflow-hidden"
    >
      <span className="absolute left-[20px] md:left-[50px] top-0 bottom-0 w-[1px] bg-white/10 z-0 hidden md:block" />

      <div className="w-full max-w-[1350px] relative z-10">
        {/* --- Title --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="flex flex-col">
            <span className="font-[Amiko] font-bold text-[#F28C38] text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">
              Career Path
            </span>
            <h2 className="font-[Anton] text-[60px] sm:text-[80px] md:text-[110px] leading-[0.85] uppercase text-white tracking-tight">
              Experience
            </h2>
          </div>

          <div className="flex flex-col md:items-end w-full md:w-auto">
            <span className="font-[Amiko] text-white/60 text-[10px] md:text-xs uppercase tracking-widest mb-4">
              2025 — Present
            </span>

            <div className="w-full md:w-[300px] h-[1px] bg-white/20" />
          </div>
        </div>

        {/* --- Work Experience --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col group">
              {/* Date */}
              <span className="font-[Amiko] font-bold text-[#F28C38] text-xs md:text-sm tracking-wider mb-3">
                {exp.period}
              </span>

              {/* Position */}
              <h3 className="font-[Anton] text-white text-2xl md:text-3xl lg:text-[32px] uppercase tracking-wide leading-tight mb-2 transition-colors duration-300 group-hover:text-[#F28C38]">
                {exp.role}
              </h3>

              {/* Company) */}
              <span className="font-[Amiko] font-bold text-[#F28C38] text-[10px] md:text-xs uppercase tracking-widest mb-4">
                {exp.company}
              </span>

              {/* Description */}
              <p className="font-[Amiko] text-white/70 text-sm md:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {exp.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="font-[Amiko] text-white/80 text-[9px] md:text-[10px] font-bold uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

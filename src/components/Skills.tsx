import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillData } from "../data/skills";

type SkillCategory = keyof typeof skillData;
const categories = Object.keys(skillData) as SkillCategory[];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");

  return (
    <section
      id="skills"
      className="bg-[#FFF8E5] w-full py-20 px-4 md:px-[50px] flex justify-center border-b border-[#d6d3cc]/50"
    >
      <div className="w-full max-w-[1350px]">
        {/* --- Title --- */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-[Anton] text-[50px] sm:text-[70px] md:text-[90px] leading-none uppercase text-[#234A5C] tracking-tight text-center">
            Tech <span className="text-[#F28C38]">Stack</span>
          </h2>
        </div>

        {/* --- Tabs --- */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="inline-flex flex-wrap justify-center bg-white/40 border border-[#d6d3cc] p-1.5 rounded-2xl backdrop-blur-sm gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-5 py-2.5 md:px-8 md:py-3 rounded-xl font-[Amiko] text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  activeTab === category
                    ? "text-white"
                    : "text-[#234A5C]/70 hover:text-[#234A5C]"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="active-skill-tab"
                    className="absolute inset-0 bg-[#234A5C] rounded-xl shadow-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- Icons --- */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 max-w-[1000px] mx-auto"
            >
              {skillData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="group flex flex-col items-center justify-center gap-4 cursor-pointer"
                >
                  <div
                    className="h-24 w-24 md:h-28 md:w-28 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl"
                    style={{
                      backgroundColor: skill.bgColor,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-12 w-12 md:h-16 md:w-16 object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>

                  {/* Tech name */}
                  <p className="font-[Amiko] font-bold text-[#234A5C] text-sm md:text-base text-center transition-colors duration-300 group-hover:text-[#F28C38]">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

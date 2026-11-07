import React, { useState, useEffect } from "react";

const Hero = () => {
  // state for animation
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* --- Section with Img and role title --- */}
      <section className="bg-[#FFF8E5] w-full relative overflow-hidden flex justify-center border-b border-[#d6d3cc]/50">
        <div className="relative w-full max-w-[1350px] h-[85vh] min-h-[550px] max-h-[740px] flex flex-col justify-between">
          <div
            className={`relative z-20 w-full pt-[30%] md:pt-[40%] lg:pt-[20%] pl-[40px] md:pl-[80px] flex flex-col items-start pointer-events-none transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <span className="font-[Amiko] font-bold text-[#F28C38] text-[10px] md:text-[14px] uppercase tracking-[0.1em] ml-1 mb-1 md:mb-2">
              Lana
            </span>
            <h1 className="font-[Anton] text-[60px] sm:text-[80px] md:text-[130px] lg:text-[150px] leading-[0.85] uppercase text-[#234A5C] tracking-tight">
              Frontend
            </h1>
          </div>

          {/* Hero img with animation */}
          <img
            src="/images/hero-img.png"
            alt="Lana"
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-[75%] sm:h-[80%] md:h-[95%] w-auto max-w-none object-cover object-top grayscale contrast-[1.15] pointer-events-none transition-all duration-1000 delay-200 ease-out ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />

          {/* Text with animation */}
          <div
            className={`relative z-30 w-full flex justify-end pr-[20px] md:pr-[80px] pb-[30px] md:pb-[10%] pointer-events-none mt-auto transition-all duration-1000 delay-150 ease-out ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <h1 className="font-[Anton] text-[60px] sm:text-[80px] md:text-[130px] lg:text-[150px] leading-[0.85] uppercase text-[#234A5C] tracking-tight">
              Developer
            </h1>
          </div>
        </div>
      </section>

      {/* --- Section with Documents and Social Links --- */}
      <section className="bg-[#FFF8E5] w-full pb-20 pt-10 px-4 md:px-[50px] flex justify-center">
        <div className="w-full max-w-[1350px] pl-4 md:pl-[30px]">
          {/* smooth show */}
          <div
            className={`hero-actions-row flex flex-col justify-between gap-10 xl:flex-row xl:items-end border-t border-[#90e0ef]/20 xl:border-none pt-8 xl:pt-0 transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Documents */}
            <div className="flex flex-col gap-4">
              <span className="font-[Amiko] font-bold text-[#234A5C]/60 uppercase tracking-[0.2em] text-[10px] md:text-[12px]">
                Documents
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/Lana_Shotashvili_Resume.pdf"
                  download="Lana_Shotashvili_Resume.pdf"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-[#F28C38] px-5 md:px-6 py-3 md:py-3.5 text-[10px] md:text-xs font-[Amiko] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#234A5C] hover:shadow-lg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12"></path>
                    <path d="m7 10 5 5 5-5"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                  <span>Download Resume</span>
                </a>

                <a
                  href="/Lana_Shotashvili_Cover_Letter.pdf"
                  download="Lana_Shotashvili_Cover_Letter.pdf"
                  className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-[#234A5C]/20 bg-transparent px-5 md:px-6 py-3 md:py-3.5 text-[10px] md:text-xs font-[Amiko] font-bold uppercase tracking-wider text-[#234A5C] transition-all duration-300 hover:-translate-y-1 hover:border-[#234A5C] hover:bg-[#234A5C] hover:text-[#FFF8E5]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                    <path d="M8 8h8"></path>
                    <path d="M8 12h8"></path>
                    <path d="M8 16h5"></path>
                  </svg>
                  <span>Cover Letter</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4 xl:items-end">
              <span className="font-[Amiko] font-bold text-[#234A5C]/60 uppercase tracking-[0.2em] text-[10px] md:text-[12px]">
                Connect
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/lana-shotashvili-834aa9384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 items-center gap-2.5 rounded-xl border border-[#d6d3cc] bg-white/40 px-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#234A5C] hover:bg-[#234A5C] hover:text-[#FFF8E5]"
                >
                  <div className="flex h-5 w-5 items-center justify-center text-[#234A5C] transition-colors duration-300 group-hover:text-[#FFF8E5]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 .5.22.5 1.2v20.6c0 .98.29 1.2 1.27 1.2h20.46c.98 0 1.27-.22 1.27-1.2V1.2C23.5.22 23.21 0 22.23 0Z"></path>
                    </svg>
                  </div>
                  <span className="font-[Amiko] text-[10px] font-bold uppercase tracking-[0.1em] text-[#234A5C] transition-colors duration-300 group-hover:text-[#FFF8E5]">
                    LinkedIn
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Lanssii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 items-center gap-2.5 rounded-xl border border-[#d6d3cc] bg-white/40 px-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#234A5C] hover:bg-[#234A5C] hover:text-[#FFF8E5]"
                >
                  <div className="flex h-5 w-5 items-center justify-center text-[#234A5C] transition-colors duration-300 group-hover:text-[#FFF8E5]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"></path>
                    </svg>
                  </div>
                  <span className="font-[Amiko] text-[10px] font-bold uppercase tracking-[0.1em] text-[#234A5C] transition-colors duration-300 group-hover:text-[#FFF8E5]">
                    GitHub
                  </span>
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shotashvililana@gmail.com"
                  className="group flex h-12 items-center gap-2.5 rounded-xl border border-[#d6d3cc] bg-white/40 px-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#234A5C] hover:bg-[#234A5C] hover:text-[#FFF8E5]"
                >
                  <div className="flex h-5 w-5 items-center justify-center text-[#234A5C] transition-colors duration-300 group-hover:text-[#FFF8E5]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <path d="m3 7 9 6 9-6"></path>
                    </svg>
                  </div>
                  <span className="font-[Amiko] text-[10px] font-bold uppercase tracking-[0.1em] text-[#234A5C] transition-colors duration-300 group-hover:text-[#FFF8E5]">
                    Email
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import BlurText from "../animations/BlurText";
import TextType from "../animations/TextType";
import DarkVeil from "../animations/DarkVeil";

export default function HeroSection({ clickToSection, pdfPath }) {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>

        <div className="relative z-10 w-full px-6 sm:px-10 md:px-20">
          <div className="flex flex-col gap-4">
            <div>
              <BlurText
                text="Muhammad Hilmy Setiawanto"
                delay={200}
                animateBy="words"
                direction="top"
                className=" text-gray-200 font-semibold text-2xl sm:text-4xl leading-none"
              />
              {/* <span className=" text-gray-200 font-semibold text-2xl sm:text-4xl leading-none">
                Muhammad Hilmy Setiawanto
              </span> */}
              <TextType
                text="Frontend Engineer and Business Analyst with 5+ years of hands-on
                experience in software development."
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
                className=" text-slate-400 text-sm md:text-xl pt-1 md:w-2xl"
              />
              {/* <h1 className=" text-slate-400 text-sm md:text-xl pt-1 md:w-2xl">
                Frontend Engineer and Business Analyst with 5+ years of hands-on
                experience in software development.
              </h1> */}
            </div>

            <div className=" flex items-center gap-5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-8 sm:mt-10 flex"
              >
                <button
                  onClick={clickToSection}
                  className=" transition hover:border-slate-300 cursor-pointer bg-slate-900/50 p-2 rounded-full border border-slate-700 text-gray-200"
                >
                  <FiArrowDown className="text-xl sm:text-2xl text-slate-400" />
                </button>
              </motion.div>

              <div className="mt-8 sm:mt-10">
                <button
                  onClick={() => window.open(pdfPath, "blank_")}
                  className=" hover:scale-105 transition hover:border-slate-300 flex items-center gap-2 font-semibold cursor-pointer bg-slate-900/50 px-5 py-2 rounded-3xl border border-slate-700 text-gray-200 text-lg"
                >
                  <p>Check my CV</p>
                  <HiOutlineExternalLink size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

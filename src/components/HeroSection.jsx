import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -top-2 left-1/4 w-[70vw] md:w-[45vw] h-[40vh] md:h-[40vh] bg-slate-800 clip-diagonal"
          />
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-0 -right-2 w-[40vw] md:w-[45vw] h-[50vh] md:h-[70vh] bg-slate-800 rounded-tl-[200px] md:rounded-tl-[300px]"
          />
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-0 -left-2 w-[40vw] md:w-[45vw] h-[48vh] md:h-[47vh] bg-slate-800 clip-diagonal"
          />
        </div>

        <div className="relative z-10 w-full px-6 sm:px-10 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div>
              <span className=" text-gray-200 font-semibold text-2xl sm:text-4xl leading-none">
                Muhammad Hilmy Setiawanto
              </span>
              <h1 className=" text-slate-400 text-sm md:text-xl pt-1 md:w-2xl">
                Frontend Engineer and Business Analyst with 5+ years of hands-on
                experience in software development.
              </h1>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8 sm:mt-10"
            >
              <button className=" cursor-pointer">
                <FiArrowDown className="text-xl sm:text-2xl text-slate-400" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

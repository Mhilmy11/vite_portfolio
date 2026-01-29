import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -top-2 left-1/4 w-[70vw] md:w-[45vw] h-[40vh] md:h-[38vh] bg-blue-900 clip-diagonal"
          />
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-0 -right-2 w-[40vw] md:w-[45vw] h-[50vh] md:h-[70vh] bg-blue-900 rounded-tl-[200px] md:rounded-tl-[300px]"
          />
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-0 -left-2 w-[40vw] md:w-[45vw] h-[50vh] md:h-[48vh] bg-blue-900 clip-diagonal"
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
              <span className=" text-white font-semibold text-3xl sm:text-4xl leading-none">
                Muhammad Hilmy Setiawanto
              </span>
              <h1 className=" text-gray-400 text-lg sm:text-xl md:text-2xl pt-1">
                Business Analyst & Frontend Developer
              </h1>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8 sm:mt-10"
            >
              <button className=" cursor-pointer">
                <FiArrowDown className="text-xl sm:text-2xl text-white" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

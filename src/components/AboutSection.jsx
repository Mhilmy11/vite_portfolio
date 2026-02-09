import { HiOutlineExternalLink } from "react-icons/hi";
import StackIcon from "tech-stack-icons";
import Container from "./Container";

export default function AboutSection({ scrollToBottom }) {
  return (
    <Container>
      <div ref={scrollToBottom} className=" grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className=" text-gray-200 text-2xl md:text-3xl font-bold">
            About Me
          </h1>
          <p className=" text-slate-400 text-sm md:text-lg">
            A brief introduction.
          </p>
        </div>

        <div className=" space-y-2 mt-2">
          <p className=" text-slate-400 text-lg">
            I'm from Depok, Indonesia. Graduated at 2026 from{" "}
            <span className=" font-bold text-white">
              Mercu Buana University
            </span>{" "}
            majoring in{" "}
            <span className=" font-bold text-white">
              informatics engineering
            </span>
            .
          </p>

          <p className=" text-slate-400 text-lg">My recent works :</p>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
              <div>
                <h1 className=" text-gray-200 font-bold">
                  PT E-media Teknologi
                </h1>
                <p className=" text-slate-400">
                  Analyzed business requirements and translated them into clear
                  system specifications.
                </p>

                <div className=" space-y-2 pt-6">
                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="typescript" />
                    <p className=" text-white">Typescript</p>
                  </div>

                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="python" />
                    <p className=" text-white">Python</p>
                  </div>

                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="oracle" />
                    <p className=" text-white">Oracle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
              <div>
                <h1 className=" text-gray-200 font-bold">Ravatra Academy</h1>
                <p className=" text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum, at!
                </p>

                <div className=" space-y-2 pt-6">
                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="react" />
                    <p className=" text-white">React Vite JS</p>
                  </div>

                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="php" />
                    <p className=" text-white">PHP Native</p>
                  </div>

                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="tailwindcss" />
                    <p className=" text-white">Tailwind CSS</p>
                  </div>

                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="mysql" />
                    <p className=" text-white">Mysql</p>
                  </div>
                </div>
              </div>

              <div className=" mt-auto pl-2">
                <button className=" cursor-pointer flex items-center gap-2 text-gray-200">
                  <HiOutlineExternalLink size={22} />
                  <p className=" underline">Demo</p>
                </button>
              </div>
            </div> */}

            <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
              <div>
                <h1 className=" text-gray-200 font-bold">RA Consulting</h1>
                <p className=" text-slate-400">
                  Developed, maintained websites while providing IT support and
                  system troubleshooting.
                </p>

                <div className=" space-y-2 pt-6">
                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="react" />
                    <p className=" text-white">React Vite JS</p>
                  </div>

                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="tailwindcss" />
                    <p className=" text-white">Tailwind CSS</p>
                  </div>

                  <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                    <StackIcon className=" w-5" name="framer" />
                    <p className=" text-white">Framer Motion</p>
                  </div>
                </div>
              </div>

              {/* <div className=" mt-auto pl-2">
                <button className=" cursor-pointer flex items-center gap-2 text-gray-200">
                  <HiOutlineExternalLink size={22} />
                  <p className=" underline">Demo</p>
                </button>
              </div> */}
            </div>
          </div>

          <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
            <div>
              <h1 className=" text-gray-200 font-bold">Paeko.id</h1>
              <p className=" text-slate-400">
                Developed responsive e-commerce interfaces integrating frontend
                components with backend services.
              </p>

              <div className=" grid grid-cols-2 md:grid-cols-3 pt-6">
                <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                  <StackIcon className=" w-5" name="react" />
                  <p className=" text-white">React Vite JS</p>
                </div>

                <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                  <StackIcon className=" w-5" name="laravel" />
                  <p className=" text-white">Laravel 8</p>
                </div>

                <div className=" flex items-center gap-2 border border-slate-700 w-fit py-0.5 px-2 rounded-2xl bg-slate-600/30">
                  <StackIcon className=" w-5" name="mysql" />
                  <p className=" text-white">Mysql</p>
                </div>
              </div>
            </div>

            {/* <div className=" mt-auto pl-2">
              <button className=" cursor-pointer flex items-center gap-2 text-gray-200">
                <HiOutlineExternalLink size={22} />
                <p className=" underline">Demo</p>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

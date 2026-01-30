import Container from "./Container";
import { HiOutlineExternalLink } from "react-icons/hi";
import StackIcon from "tech-stack-icons";

export default function OtherProject() {
  return (
    <Container>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-10">
        <div>
          <h1 className=" text-gray-200 text-2xl md:text-3xl font-bold">
            Other Projects
          </h1>
          <p className=" text-slate-400 text-sm md:text-lg">
            That I'm truly proud to showcase.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
            <div>
              <h1 className=" text-gray-200 font-bold">Kiara Group</h1>
              <p className=" text-slate-400">
                Built responsive landing page to strengthen company branding and
                online presence.
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

            <div className=" mt-auto pl-2">
              <button
                onClick={() => window.open("https://kiaragroup.id/", "_blank")}
                className=" hover:underline cursor-pointer flex items-center gap-2 text-gray-200"
              >
                <HiOutlineExternalLink size={22} />
                <p>Demo</p>
              </button>
            </div>
          </div>

          <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
            <div>
              <h1 className=" text-gray-200 font-bold">Ravatra Academy</h1>
              <p className=" text-slate-400">
                Developed training product website with dynamic content and
                structured information display.
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
              <button
                onClick={() =>
                  window.open("http://ravatraacademy.id/", "_blank")
                }
                className=" hover:underline cursor-pointer flex items-center gap-2 text-gray-200"
              >
                <HiOutlineExternalLink size={22} />
                <p>Demo</p>
              </button>
            </div>
          </div>

          <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
            <div>
              <h1 className=" text-gray-200 font-bold">RA Consulting</h1>
              <p className=" text-slate-400">
                Redesigned company website improving UI, UX consistency, and
                overall usability.
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

            <div className=" mt-auto pl-2">
              <button
                onClick={() => window.open("https://rac.co.id/", "blank_")}
                className=" hover:underline cursor-pointer flex items-center gap-2 text-gray-200"
              >
                <HiOutlineExternalLink size={22} />
                <p>Demo</p>
              </button>
            </div>
          </div>

          <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
            <div>
              <h1 className=" text-gray-200 font-bold">Paeko.id</h1>
              <p className=" text-slate-400">
                Built interactive insight dashboard to visualize business data
                for decision-making.
              </p>

              <div className=" space-y-2 pt-6">
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

            <div className=" mt-auto pl-2">
              <button className=" hover:underline cursor-pointer flex items-center gap-2 text-gray-200">
                <HiOutlineExternalLink size={22} />
                <p>Demo</p>
              </button>
            </div>
          </div>

          <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
            <div>
              <h1 className=" text-gray-200 font-bold">KOPIJATIGOTA</h1>
              <p className=" text-slate-400">
                Developed responsive community profile website with clean layout
                and structured information.
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

            <div className=" mt-auto pl-2">
              <button
                onClick={() =>
                  window.open("https://kopijatigota.id/", "blank_")
                }
                className=" hover:underline cursor-pointer flex items-center gap-2 text-gray-200"
              >
                <HiOutlineExternalLink size={22} />
                <p>Demo</p>
              </button>
            </div>
          </div>

          <div className=" bg-slate-900/50 p-6 rounded-xl border border-slate-700 flex flex-col space-y-20">
            <div>
              <h1 className=" text-gray-200 font-bold">DSA Consulting</h1>
              <p className=" text-slate-400">
                Developed professional company profile website ensuring
                responsiveness and cross-device compatibility.
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

            <div className=" mt-auto pl-2">
              <button
                onClick={() =>
                  window.open("https://dsaindoconsulting.co.id/", "blank_")
                }
                className=" hover:underline cursor-pointer flex items-center gap-2 text-gray-200"
              >
                <HiOutlineExternalLink size={22} />
                <p>Demo</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

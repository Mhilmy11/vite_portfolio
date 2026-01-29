import Container from "./Container";

export default function PersonalExperience() {
  return (
    <Container>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-10">
        <div>
          <h1 className=" text-gray-200 text-2xl md:text-3xl font-bold">
            Personal Experience
          </h1>
          <p className=" text-slate-400 text-sm md:text-lg">
            Work experiences and career growth along the way.
          </p>
        </div>

        <div>
          <div className=" flex justify-between items-center">
            <div>
              <h1 className=" font-bold text-gray-200 text-xl">
                Business Analyst
              </h1>
              <p className=" text-slate-400">at PT Enakans Media Teknologi</p>
            </div>
            <span className="bg-slate-900/50 px-2 py-0.5 rounded-3xl border border-slate-700 text-gray-200 font-semibold text-xl">
              2023
            </span>
          </div>

          <div className=" w-full h-0.5 bg-slate-700 my-4"></div>

          <div className=" flex justify-between items-center">
            <div>
              <h1 className=" font-bold text-gray-200 text-xl">
                Web Developer & IT Support
              </h1>
              <p className=" text-slate-400">at PT RA Consulting</p>
            </div>
            <span className="bg-slate-900/50 px-2 py-0.5 rounded-3xl border border-slate-700 text-gray-200 font-semibold text-xl">
              2022
            </span>
          </div>

          <div className=" w-full h-0.5 bg-slate-700 my-4"></div>

          <div className=" flex justify-between items-center">
            <div>
              <h1 className=" font-bold text-gray-200 text-xl">
                Frontend Developer
              </h1>
              <p className=" text-slate-400">at PT Makui Teknologi Indonesia</p>
            </div>
            <span className="bg-slate-900/50 px-2 py-0.5 rounded-3xl border border-slate-700 text-gray-200 font-semibold text-xl">
              2021
            </span>
          </div>

          <div className=" w-full h-0.5 bg-slate-700 my-4"></div>
        </div>
      </div>
    </Container>
  );
}

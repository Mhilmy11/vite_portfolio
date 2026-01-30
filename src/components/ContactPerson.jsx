import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import Container from "./Container";

export default function ContactPerson() {
  return (
    <Container>
      <div className=" w-full h-0.5 bg-slate-700 my-10"></div>

      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className=" text-gray-200 text-2xl md:text-3xl font-bold">
            Contact Person
          </h1>
          <p className=" text-slate-400 text-sm md:text-lg">
            Get in touch with me.
          </p>
        </div>

        <div className=" text-gray-200 space-y-1 mt-2">
          <button className=" cursor-pointer hover:underline decoration-slate-600 decoration-2 flex items-center gap-1 font-semibold">
            <AiOutlineMail size={21} />
            <p>Email</p>
          </button>
          <button className=" cursor-pointer hover:underline decoration-slate-600 decoration-2 flex items-center gap-1 font-semibold">
            <AiOutlineGithub size={21} />
            <p>Github</p>
          </button>
          <button className=" cursor-pointer hover:underline decoration-slate-600 decoration-2 flex items-center gap-1 font-semibold">
            <AiOutlineInstagram size={21} />
            <p>Instagram</p>
          </button>
          <button
            onClick={() =>
              window.open(
                "https://id.linkedin.com/company/dsa-indo-consulting",
                "_blank",
              )
            }
            className=" cursor-pointer hover:underline decoration-slate-600 decoration-2 flex items-center gap-1 font-semibold"
          >
            <AiFillLinkedin size={21} />
            <p>Linkedin</p>
          </button>
        </div>
      </div>
    </Container>
  );
}

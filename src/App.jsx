import "./App.css";
import { useRef } from "react";
import AboutSection from "./components/AboutSection";
import ContactPerson from "./components/ContactPerson";
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import OtherProject from "./components/OtherProject";
import PersonalExperience from "./components/PersonalExperience";
import TechnicalSkill from "./components/TechnicalSkill";

function App() {
  const scrollToBottom = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" font-sans">
      <HeroSection
        pdfPath={"public/files/Curriculum Vitae_Muhammad Hilmy Setiawanto.pdf"}
        clickToSection={() => scrollToSection(scrollToBottom)}
      />

      <div className=" bg-slate-800 pt-20">
        <AboutSection scrollToBottom={scrollToBottom} />

        <OtherProject />

        <PersonalExperience />

        <TechnicalSkill />

        <ContactPerson />

        <Container>
          <div className=" text-gray-200 font-semibold mt-14 mb-10 flex justify-between items-center px-10 italic">
            <p>© {new Date().getFullYear()}</p>
            <p>Muhammad Hilmy Setiawanto</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;

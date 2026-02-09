import "./App.css";
import { useRef } from "react";
import AboutSection from "./components/AboutSection";
import ContactPerson from "./components/ContactPerson";
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import OtherProject from "./components/OtherProject";
import PersonalExperience from "./components/PersonalExperience";
import TechnicalSkill from "./components/TechnicalSkill";
import LiquidEther from "./animations/LiquidEther";

function App() {
  const scrollToBottom = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" font-sans">
      <HeroSection
        pdfPath={"/files/Curriculum Vitae_Muhammad Hilmy Setiawanto.pdf"}
        clickToSection={() => scrollToSection(scrollToBottom)}
      />

      <div
        className="relative min-h-screen pt-20 overflow-hidden"
        ref={scrollToBottom}
      >
        <div className="absolute inset-0 -z-10 bg-black">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={1}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            color0="#5227FF"
            color1="#FF9FFC"
            color2="#B19EEF"
          />
        </div>

        <div className="relative z-10">
          <AboutSection />
          <OtherProject />
          <PersonalExperience />
          <TechnicalSkill />
          <ContactPerson />

          <Container>
            <div className="text-gray-200 font-semibold mt-14 mb-10 flex justify-between items-center px-10 italic">
              <p>© {new Date().getFullYear()}</p>
              <p>Muhammad Hilmy Setiawanto</p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;

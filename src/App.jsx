import "./App.css";
import { useRef } from "react";
import AboutSection from "./components/AboutSection";
import ContactPerson from "./components/ContactPerson";
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import OtherProject from "./components/OtherProject";
import PersonalExperience from "./components/PersonalExperience";
import TechnicalSkill from "./components/TechnicalSkill";
import PixelSnow from "./animations/PixelSnow";

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
          {/* <PixelSnow
            color="#121063"
            flakeSize={0.01}
            minFlakeSize={1.25}
            pixelResolution={200}
            speed={1.25}
            density={0.3}
            direction={125}
            brightness={1}
            depthFade={8}
            farPlane={20}
            gamma={0.4545}
            variant="square"
          /> */}
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

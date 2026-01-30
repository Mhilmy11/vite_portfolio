import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactPerson from "./components/ContactPerson";
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import OtherProject from "./components/OtherProject";
import PersonalExperience from "./components/PersonalExperience";
import TechnicalSkill from "./components/TechnicalSkill";

function App() {
  return (
    <div className=" font-sans">
      <HeroSection />

      <div className=" bg-slate-800 pt-20">
        <AboutSection />

        <OtherProject />

        <PersonalExperience />

        <TechnicalSkill />

        <ContactPerson />

        <Container>
          <div className=" text-gray-200 font-semibold mt-14 mb-10 flex justify-between items-center px-10">
            <p>© {new Date().getFullYear()}</p>
            <p>Muhammad Hilmy Setiawanto</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;

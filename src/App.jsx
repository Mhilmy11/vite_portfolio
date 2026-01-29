import "./App.css";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import OtherProject from "./components/OtherProject";
import PersonalExperience from "./components/PersonalExperience";

function App() {
  return (
    <div className=" font-sans">
      <HeroSection />

      <div className=" bg-slate-800 pt-20">
        <AboutSection />

        <OtherProject />

        <PersonalExperience />
      </div>
    </div>
  );
}

export default App;

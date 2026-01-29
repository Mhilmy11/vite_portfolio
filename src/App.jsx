import "./App.css";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <HeroSection />

      <div className=" bg-secondary">
        <AboutSection />
      </div>
    </>
  );
}

export default App;

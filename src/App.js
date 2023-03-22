import CanvasComponent from "./3Dcomponents/CanvasComponent";
import AboutMe from "./components/AboutMe";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import ContactAndLinks from "./components/ContactAndLinks";
import SkillsAndExperience from "./components/SkillsAndExperience";

function App() {

  return (
    <div>
      <LandingPage />
      <SkillsAndExperience />
      <CanvasComponent />
    </div>
  );
}

export default App;
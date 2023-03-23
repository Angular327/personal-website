import Landing from './components/Landing/LandingPage';
import SkillsAndExperience from "./components/SkillsAndExperience/SkillsAndExperience";
import CanvasComponent from "./3Dcomponents/CanvasComponent";
import { useState } from 'react';
function App() {
  const [activeMovement, setActiveMovement] = useState(
    {
      location: 0,
      movement: 0,
      isActive: false
    }
  );

  return (
    <div>
      <Landing loading={true} />
      <SkillsAndExperience loading={true} />
      {!activeMovement.isActive && <>
        {activeMovement.location === 0 && <Landing setActiveMovement={setActiveMovement} />}
        {activeMovement.location === 1 && <SkillsAndExperience setActiveMovement={setActiveMovement} />}
      </>}

      <CanvasComponent
        activeMovement={activeMovement}
        setActiveMovement={setActiveMovement} />
    </div>
  );
}

export default App;
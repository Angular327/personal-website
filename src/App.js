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
      <Landing
        activeMovement={activeMovement}
        setActiveMovement={setActiveMovement} />

      <SkillsAndExperience
        activeMovement={activeMovement}
        setActiveMovement={setActiveMovement} />

      <CanvasComponent
        activeMovement={activeMovement}
        setActiveMovement={setActiveMovement} />
    </div>
  );
}

export default App;
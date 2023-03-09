import CanvasComponent from "./3Dcomponents/CanvasComponent";
import AboutMe from "./components/AboutMe";
import { useState } from "react";
import RightArrow from "./components/RightArrow";
function App() {

  return (
    <div>
      <AboutMe />
      <CanvasComponent />
      <RightArrow />
    </div>
  );
}

export default App;
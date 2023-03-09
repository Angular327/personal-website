import { Canvas } from "@react-three/fiber";
import BuildingComponent from './Assets/BuildingComponent';
import CameraComponent from './CameraComponent';
import { useState } from "react";

function CanvasComponent() {
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <>
      <section className='App-header'>
        <button onClick={handleButtonClick}>Hide Text</button>
        <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', visibility: showText ? 'visible' : 'hidden'}}>
          <ambientLight intensity={1} />
          <BuildingComponent />
          <CameraComponent />
        </Canvas>
      </section>
    </>
  );
}

export default CanvasComponent;
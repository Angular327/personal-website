import { Canvas } from "@react-three/fiber";
import BuildingComponent from './Assets/BuildingComponent';
import CameraComponent from './CameraComponent';
import { useState } from "react";
import LandingPage from "../components/LandingPage";
import HTMLPlane from "./Assets/HtmlPlane";

function CanvasComponent() {
  const [show3D, setShow3d] = useState(true);

  const handleButtonClick = () => {
    setShow3d(!show3D);
  };

  return (
    <>
      <section className='App-header'>
        <button onClick={handleButtonClick}>Hide Text</button>
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            visibility: show3D ? 'visible' : 'hidden',
          }}>
          <ambientLight intensity={1} />
          <BuildingComponent />
          <CameraComponent />
          <HTMLPlane htmlComponent={LandingPage} />
        </Canvas>
      </section>
    </>
  );
}

export default CanvasComponent;
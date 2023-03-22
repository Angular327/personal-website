import { Canvas } from "@react-three/fiber";
import BuildingComponent from './Assets/BuildingComponent';
import { useState } from "react";
import LandingPage from "../components/LandingPage";
import HTMLPlane from "./Assets/HtmlPlane";
import CameraMovementComponent from './Assets/CameraMovementComponent';
import { CameraMovements1to2, CameraPositions } from '../Utils/CameraMovements';

function CanvasComponent() {
  const [show3D, setShow3d] = useState(true);

  return (
    <>
      <section className='App-header'>
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            visibility: show3D ? 'visible' : 'hidden',
          }}
          gl={{
            preserveDrawingBuffer: true
          }}>
          <BuildingComponent />
          <ambientLight intensity={1} />
          <CameraMovementComponent CameraMovements={CameraMovements1to2}/>;
          <HTMLPlane index={0}/>
          <HTMLPlane index={1}/>
        </Canvas>
      </section>
    </>
  );
}

export default CanvasComponent;
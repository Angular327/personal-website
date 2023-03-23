import { Canvas } from "@react-three/fiber";
import BuildingComponent from './Assets/BuildingComponent';
import HTMLPlane from "./Assets/HtmlPlane";
import CameraMovementComponent from './Assets/CameraMovementComponent';
import { CameraTransitionsList } from '../Utils/CameraMovements';

function CanvasComponent({ activeMovement, setActiveMovement }) {
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
            zIndex: !activeMovement.isActive ? -1 : 1,
          }}
          gl={{
            preserveDrawingBuffer: true
          }}>
          <BuildingComponent />
          <ambientLight intensity={1} />
              <CameraMovementComponent 
              activeMovement={activeMovement} 
              setActiveMovement={setActiveMovement}
              />
              <HTMLPlane index={0} />
              <HTMLPlane index={1} />
        </Canvas>
      </section>
    </>

  );
}

export default CanvasComponent;
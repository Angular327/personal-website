import { Canvas } from "@react-three/fiber";
import BuildingComponent from './Assets/BuildingComponent';
import CameraComponent from './CameraComponent';

function Landing() {
  return (
    <>
      <section className='App-header'>
        <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ambientLight intensity={1} />
          <BuildingComponent />
          <CameraComponent />
        </Canvas>
      </section>
    </>
  );
}

export default Landing;
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function BuildingComponent(props) {
  const gltf = useLoader(GLTFLoader, '../../BuildingExport.glb');

  return (
    <mesh>
      <primitive 
        object={gltf.scene} />
    </mesh>
  )
}

export default BuildingComponent;
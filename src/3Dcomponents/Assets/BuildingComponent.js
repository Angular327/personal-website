import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function BuildingComponent(props) {
  const onError = (error) => {
    console.log(`Error loading GLTF: ${error}`)
  }

  const gltf = useLoader(GLTFLoader, '../../BuildingExport.glb', null, onError)
  //x = 54.5
  //y = 63.2
  //z = 30.7
  return (
    <mesh>
      <primitive 
        object={gltf.scene} />
    </mesh>
  )
}

export default BuildingComponent;
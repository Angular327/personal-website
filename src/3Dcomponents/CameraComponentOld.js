import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

const CameraMovements = [
    {
        time: 0,
        postion: [10.3004, 23.5165, -.55],
        lookat: [10.9, 6, .566],
        //rotation: [0.612372, 0.353553, 0.353553, 0.612372]
        rotation: [90, 120, -90]
    },
    {
        time: 0,
        postion: [11.7233, -5.33563, 37.4855],
        rotation: [43.8529, 77, 0]
    },
    {
        time: 1,
        postion: [26.2707, 9.58136, 13.2218],
        rotation: [-0, 0, 0]
    }
]

function CameraComponent() {
    const { camera } = useThree();
    camera.position.set(...CameraMovements[0].postion); // Set camera position
    setRotation(camera, ...CameraMovements[0].rotation); // Set Camera Rotation
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.setFocalLength(45);
    return (
        <>
            <ambientLight intensity={1} />
        </>
    );
}

function setRotation(camera, x, y, z) {
    camera.rotation.set(THREE.MathUtils.degToRad(x),THREE.MathUtils.degToRad(y),THREE.MathUtils.degToRad(z))
    //camera.rotation.set(new THREE.MathUtils.degToRad(x), new THREE.MathUtils.degToRad(y), new THREE.MathUtils.degToRad(z));

}

export default CameraComponent;
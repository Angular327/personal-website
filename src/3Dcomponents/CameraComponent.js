import React, { useRef } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import * as THREE from 'three';

//list of time, points, and rotation for translatoin
// const CameraMovements = [
//     {
//         time: 0,
//         position: new THREE.Vector3(1.9, 19.15, -.48),
//         rotation: [90, 125, -90]
//     },
//     {
//         time: 1.3,
//         position: new THREE.Vector3(10, 29, 15),
//         rotation: [-70, 56, 66.7]
//     },
//     {
//         time: 3.5,
//         position: new THREE.Vector3(20, 8, 20),
//         rotation: [-14, 66.3, 13]
//     },
//     {
//         time: 6,
//         position: new THREE.Vector3(9, 3.75, 3),
//         rotation: [0, 90, 0]
//     }
// ];

const CameraMovements = [
    {
        time: 0,
        position: new THREE.Vector3(9, 3.75, 3),
        rotation: [0, 90, 0]
    },
    {
        time: 2,
        position: new THREE.Vector3(9 + 10, 3.75 + 15, 3 + 30),
        rotation: [-17.5, 47.5, 14]
    },
    {
        time: 3.5,
        position: new THREE.Vector3(-20, 35, 50),
        rotation: [-18.8, 10.7, 3.6]
    },
    {
        time: 4.2,
        position: new THREE.Vector3(-20, 40, 50),
        rotation: [-18.4, -1.8, -0.01]
    },
    {
        time: 7,
        position: new THREE.Vector3(-15.91, 1.5, 24.388),
        rotation: [0,0,0]
    },
];

function CameraComponent() {
    //set up refs for camera and times
    const { camera } = useThree();
    const cameraRef = useRef();
    const clockRef = useRef(new THREE.Clock());

    //set intiial starting values
    camera.position.set(...CameraMovements[0].position);
    camera.rotation.set(...CameraMovements[0].rotation.map((angle) => THREE.MathUtils.degToRad(angle)));
    
    // camera.lookAt(new THREE.Vector3(-18, 20, -10));
    // console.log(camera.rotation);

    //loop every frame for camera movement
    let index = 0;

    useFrame(({}) => {
        //change indeces of point transition
        if(index + 2 < CameraMovements.length && clockRef.current.getElapsedTime() > CameraMovements[index + 1].time) {
            index += 1;
        }

        //calculate time for transition
        const t = Math.min(1, (clockRef.current.getElapsedTime() - CameraMovements[index].time) / (CameraMovements[index + 1].time - CameraMovements[index].time));
        updatePosition(t, camera , index);
    });

    //set perspective camera
    return (
        <perspectiveCamera
            ref={cameraRef}
            position={CameraMovements[0].position}
            fov={45}
            near={0.1}
            far={100}
        />
    );
}
export default CameraComponent;

function updatePosition(time, camera, index) {    
    //Lerp position from t0-t1
    const startPosition = CameraMovements[index].position;
    const endPosition = CameraMovements[index + 1].position;

    const newPosition = new THREE.Vector3().lerpVectors(startPosition, endPosition, time);
    camera.position.set(newPosition.x, newPosition.y, newPosition.z);

    // Lerp rotation
    // convert array to Euler
    const startEuler = new THREE.Euler().fromArray(CameraMovements[index].rotation.map((angle) => THREE.MathUtils.degToRad(angle)));
    const endEuler = new THREE.Euler().fromArray(CameraMovements[index + 1].rotation.map((angle) => THREE.MathUtils.degToRad(angle)));
    
    //convert euler to quaternion
    const startQuaternion = new THREE.Quaternion().setFromEuler(startEuler);
    const endQuaternion = new THREE.Quaternion().setFromEuler(endEuler);
    
    //lerp quaternion
    const resultQuaternion = startQuaternion.clone().slerp(endQuaternion, time);

    //set quaternion
    camera.setRotationFromQuaternion(resultQuaternion);
}
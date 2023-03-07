import React, { useRef } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import * as THREE from 'three';
import { updatePosition } from '../../Utils/UpdatePosition';

function CameraComponent(props) {
    //set up refs for camera and times
    const { camera } = useThree();
    const cameraRef = useRef();
    const clockRef = useRef(new THREE.Clock());
    const CameraMovements = props.CameraMovements;

    //set intiial starting values
    camera.position.set(...CameraMovements[0].position);
    camera.rotation.set(...CameraMovements[0].rotation.map((angle) => THREE.MathUtils.degToRad(angle)));
    
    // camera.lookAt(new THREE.Vector3(-18, 20, -10));
    // console.log(camera.rotation);

    //loop every frame for camera movement
    let index = 0;

    //Camera Loop
    useFrame(({}) => {
        //change indeces of point transition
        if(index + 2 < CameraMovements.length && clockRef.current.getElapsedTime() > CameraMovements[index + 1].time) {
            index += 1;
        }

        //calculate time for transition
        const t = Math.min(1, (clockRef.current.getElapsedTime() - CameraMovements[index].time) / (CameraMovements[index + 1].time - CameraMovements[index].time));
        updatePosition(t, camera , index, CameraMovements);
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


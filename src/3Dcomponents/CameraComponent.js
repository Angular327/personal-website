import React, { useRef } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import CameraMovementComponent from './Assets/CameraMovementComponent';
import * as THREE from 'three';

// list of time, points, and rotation for translatoin
const CameraMovements1to2 = [
    {
        time: 0,
        position: new THREE.Vector3(1.9, 19.15, -.48),
        rotation: [90, 125, -90]
    },
    {
        time: 1.3,
        position: new THREE.Vector3(10, 29, 15),
        rotation: [-70, 56, 66.7]
    },
    {
        time: 3.5,
        position: new THREE.Vector3(20, 8, 20),
        rotation: [-14, 66.3, 13]
    },
    {
        time: 6,
        position: new THREE.Vector3(9, 3.75, 3),
        rotation: [0, 90, 0]
    }
];

const CameraMovements2to3 = [
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

function cameraComponent() {
    return <CameraMovementComponent CameraMovements={CameraMovements1to2}/>;
  }
  
export default cameraComponent;
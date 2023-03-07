import * as THREE from 'three';

//3D movement given time, object, index, and 
export function updatePosition(time, object, index, movements) {    
    //Lerp position from t0-t1
    const startPosition = movements[index].position;
    const endPosition = movements[index + 1].position;

    const newPosition = new THREE.Vector3().lerpVectors(startPosition, endPosition, time);
    object.position.set(newPosition.x, newPosition.y, newPosition.z);

    // Lerp rotation
    // convert array to Euler
    const startEuler = new THREE.Euler().fromArray(movements[index].rotation.map((angle) => THREE.MathUtils.degToRad(angle)));
    const endEuler = new THREE.Euler().fromArray(movements[index + 1].rotation.map((angle) => THREE.MathUtils.degToRad(angle)));
    
    //convert euler to quaternion
    const startQuaternion = new THREE.Quaternion().setFromEuler(startEuler);
    const endQuaternion = new THREE.Quaternion().setFromEuler(endEuler);
    
    //lerp quaternion
    const resultQuaternion = startQuaternion.clone().slerp(endQuaternion, time);

    //set quaternion
    object.setRotationFromQuaternion(resultQuaternion);
}
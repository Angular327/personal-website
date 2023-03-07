import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
 
function Cylinder3d(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      ref={ref}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={"hotpink"}
      />
    </mesh>
  );
}
 
export default Cylinder3d;
import React from 'react';
import { Plane } from '@react-three/drei';
import { Html } from '@react-three/drei';

const HtmlPlane = ({ htmlComponent: HtmlComponent }) => {
  return (
    <Plane args={[1, 1]} position={[0, 0, 0]}>
      <meshBasicMaterial>
        <Html scaleFactor={10}>
          <HtmlComponent />
        </Html>
      </meshBasicMaterial>
    </Plane>
  );
};

export default HtmlPlane;

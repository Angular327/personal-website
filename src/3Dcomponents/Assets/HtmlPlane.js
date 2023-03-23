import React, { useState, useEffect } from "react";
import { Plane } from "@react-three/drei";
import { BillBoards } from "../../Utils/BillboardPositions";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import domtoimage from 'dom-to-image';

export const HtmlPlane = ({ index }) => {
  const [texture, setTexture] = useState(null);
  const [dimensions, setDimensions] = useState([0, 0]);
  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  const { viewport } = useThree();
  const aspectRatio = viewport.width / viewport.height;

  useEffect(() => {
    const elementList = document.getElementsByClassName(`${BillBoards[index].id} dom2image`);
    if (elementList.length > 0) {
      const element = elementList[0];
      domtoimage.toBlob(element)
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const loader = new THREE.TextureLoader();

          loader.load(url, (generatedTexture) => {
            generatedTexture.minFilter = THREE.LinearFilter;
            generatedTexture.generateMipmaps = false;
            generatedTexture.needsUpdate = true;

            setTexture(generatedTexture);
            setDimensions([
              BillBoards[index].height * aspectRatio,
              BillBoards[index].width,
            ]);
            setPosition(BillBoards[index].position);
            setRotation(BillBoards[index].rotation);

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            }
          });
        });
    }
  }, [aspectRatio, index]);

  return (
    <Plane
      args={dimensions}
      position={position}
      rotation={rotation}
    >
      {texture ? (
        <meshBasicMaterial
          map={texture}
          transparent={true}
          opacity={1}
        />
      ) : (
        <meshBasicMaterial color="gray" />
      )}
    </Plane>
  );
};

export default HtmlPlane;

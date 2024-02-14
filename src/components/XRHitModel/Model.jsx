import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'; // Agrega esta línea para importar la biblioteca 'three'
import texture from "./NormalMap2.png"
const Model = ({ position, rotation=[Math.PI/2,0,0], axis_rotation="z" }) => {
  const objRef = useRef();
  const obj = useLoader(OBJLoader, '/models/Amarok.obj');
  useFrame((state, delta) => {
    objRef.current.rotation[axis_rotation] += delta
  })
  const colorMap = useLoader(THREE.TextureLoader, texture);
  const modelScale = 0.01
  const [materialApplied, setMaterialApplied] = useState(false);

  useEffect(() => {
    if (objRef.current && !materialApplied) {
      objRef.current.traverse(child => {
        if (child.isMesh) {
          const material = new THREE.MeshStandardMaterial({
            map: colorMap, // Textura para el color
            color: 0xFF0000, // Color blanco como base
          });
          child.material = material;
        }
      });
      setMaterialApplied(true);
    }
  }, [objRef.current, colorMap, materialApplied]);

  console.log("POS", position)
  return (
    <>
      <OrbitControls/>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <group ref={objRef} position={position}>
        <primitive object={obj} scale={[0.005, 0.005, 0.005]} rotation={rotation}/>
      </group>
    </>
  );

}

export default Model;

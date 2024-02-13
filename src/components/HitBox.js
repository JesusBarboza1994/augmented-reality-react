import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest } from "@react-three/xr";
import { useRef, useState } from "react";
import Box from "./Box";

export default function HitBox(){
  const reticleRef = useRef()
  const [cubes, setCubes] = useState([])
  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(reticleRef.position, reticleRef.quaternion, reticleRef.scale)
    // reticleRef.current.rotation.set(-Math.PI / 2,0,0)
  })

  const placeCube = (e) =>{
    let position = e.intersection.object.position.clone()
    let id = Date.now()
    setCubes(...cubes, {position, id})
  }
  return(
    <>
      <OrbitControls/>
      <ambientLight/>
      {cubes.map((position, id)=>{
        return <Box key={id} position={position}/>
      })}
      <Interactive onSelect={placeCube}>
        <mesh ref={reticleRef} positionX={-Math.PI / 2}>
          <ringGeometry args={[0.1, 0.25, 32]}/>
          <meshStandardMaterial color={"white"}/>
        </mesh>
      </Interactive>
    </>
  )
}
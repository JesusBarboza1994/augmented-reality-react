import { OrbitControls } from "@react-three/drei"
import { Interactive, useHitTest } from "@react-three/xr"
import { useRef, useState } from "react"
import Cube from "./Cube"

const XRHitPosition = () => {
  const reticleRef = useRef()
  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(reticleRef.current.position, reticleRef.current.quaternion, reticleRef.current.scale);
    reticleRef.current.rotation.set(-Math.PI / 2,0,0)
  })
  const [cubes, setCubes] = useState([])
  function placeCube(e){
    let position = e.intersection.object.position.clone()
    let id = Date.now()
    setCubes([...cubes, {position, id}])
    console.log(cubes)
  }

  return(
    <>
      <OrbitControls/>
      <ambientLight/>
      {cubes.map(cube=>{
        return <Cube key={cube.id} position={cube.position}/>
      })}
      <Interactive onSelect={placeCube}>
        <mesh ref={reticleRef} position={[0, 0, -20]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[1, 1]}/>
          <meshStandardMaterial color={"green"} />
        </mesh>
      </Interactive>
    </>
  )
}

export default XRHitPosition
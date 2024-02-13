import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Cube = () => {
  const cubeRef = useRef()
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
  })
  return(
    <>
       <OrbitControls/>
      <ambientLight/>
      <mesh ref={cubeRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  )
}

export default Cube
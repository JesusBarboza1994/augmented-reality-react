import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { PlaneGeometry } from "three"

const XRHitPosition = () => {
  const reticleRef = useRef()
  return(
    <>
      <OrbitControls/>
      <ambientLight/>
      <mesh ref={reticleRef} position={[0, 0, 4]}>
        <planeGeometry args={[1, 1]}/>
        <meshStandardMaterial color={"green"} />
      </mesh>
    </>
  )
}

export default XRHitPosition
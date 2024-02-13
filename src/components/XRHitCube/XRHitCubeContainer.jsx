import { Canvas } from "@react-three/fiber"
import { ARButton, XR } from "@react-three/xr"
import XRHitPosition from "./XrHitPosition"

const XRHitCubeContainer = () => {
  return (
    <>
      <ARButton sessionInit={{requiredFeatures: ['hit-test']}}/>
      <Canvas>
        <XR>
          <XRHitPosition/>
        </XR>
      </Canvas>
    </>
  )  
}

export default XRHitCubeContainer
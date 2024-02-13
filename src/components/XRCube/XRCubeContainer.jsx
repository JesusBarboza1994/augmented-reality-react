import { Canvas } from "@react-three/fiber"
import XRCube from "./XRCube"
import { ARButton, XR } from "@react-three/xr"


const XRCubeContainer = () => {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <XRCube/>
        </XR>
      </Canvas>
    </>
  )  
}

export default XRCubeContainer
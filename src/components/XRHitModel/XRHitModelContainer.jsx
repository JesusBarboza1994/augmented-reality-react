import { Canvas } from "@react-three/fiber"
import { ARButton, XR } from "@react-three/xr"
import XRHitPositionModel from "./XrHitPositionModel"
import Model from "./Model"

const XRHitModelContainer = () => {
  const handleClick = (event) => {
    console.log(event)
    console.log('Hiciste clic en el canvas!');
  };

  return (
    <>
      <ARButton sessionInit={{requiredFeatures: ['hit-test']}}>Miralo en AR!</ARButton>
      <Canvas>
        <XR>
          <XRHitPositionModel/>
        </XR>
      </Canvas>
    </>
  )  
}

export default XRHitModelContainer
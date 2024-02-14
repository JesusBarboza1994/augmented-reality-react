import { Canvas, useFrame,extend, useThree, } from "@react-three/fiber"
import { ARButton, XR } from "@react-three/xr"
import Video from "./Video"
import videoSrc from "./mrc.mp4"
import { useRef } from "react";
import { Box, OrbitControls } from "@react-three/drei";
const VideoContainer = () => {
  return(
    <>
      <ARButton sessionInit={{requiredFeatures: ['hit-test']}}>Mira el video</ARButton>
      <Canvas>
        <XR>
          <Video videoURL={"./mrc.mp4"} />
        </XR>
      </Canvas>
    </>
  )
}

export default VideoContainer
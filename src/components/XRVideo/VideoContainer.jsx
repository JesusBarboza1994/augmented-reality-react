import { Canvas, useFrame,extend, useThree, } from "@react-three/fiber"
import { ARButton, XR } from "@react-three/xr"
import Video from "./Video"
import videoSrc from "./mrc.mp4"
import { useRef } from "react";
import { Box } from "@react-three/drei";
const VideoContainer = () => {
  const audio = new Audio("/mrc.mp3");
  console.log("AUDIO", audio) 
  audio.autoplay = true
  audio.loop= true
  return(
    <>
      <ARButton>Mira el video</ARButton>
      <Canvas>
        <XR>
          <Video videoURL={"./mrc.mp4"} />
        </XR>
      </Canvas>
    </>
  )
}

export default VideoContainer
import { Canvas } from "@react-three/fiber"
import { ARButton, XR } from "@react-three/xr"
import Video from "./Video"
import videoSrc from "./mrc.mp4"
const VideoContainer = () => {
  const audio = new Audio("/mrc.mp3"); 
  return(
    <>
      <ARButton>Mira el video</ARButton>
      <Canvas>
        <XR>
          <Video videoURL={"./mrc.mp4"}/>
        </XR>
      </Canvas>
    </>
  )
}

export default VideoContainer
import { Canvas } from "@react-three/fiber"
import { ARButton, XR } from "@react-three/xr"
import XRHitPositionModel from "./XrHitPositionModel"
import Model from "./Model"
import { useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa";

const XRHitModelContainer = () => {
  const [show, setShow] = useState(false)
  const [rotation, setRotation] = useState(null)
  const handleClick = () =>{
    setShow(!show)
    if(!show){
      setRotation(0)
    }else{
      setRotation(null)
    }
  } 
  return (
    <> 
      {show ? 
      <button type="toggle" style={{position: "absolute", top: 0, zIndex:100}} onClick={handleClick}><FaPlay /></button>
      :
      <button type="toggle" style={{position: "absolute", top: 0, zIndex:100}} onClick={handleClick}><FaPause /></button>}
      <ARButton sessionInit={{requiredFeatures: ['hit-test']}}>Miralo en AR!</ARButton>
      <Canvas>
        
        <XR>
          <XRHitPositionModel rotation={rotation}/>
        </XR>
      </Canvas>
    </>
  )  
}

export default XRHitModelContainer
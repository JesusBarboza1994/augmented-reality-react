import { OrbitControls } from "@react-three/drei"
import { Interactive, useHitTest } from "@react-three/xr"
import { useRef, useState } from "react"
import Model from "./Model"

const XRHitPositionModel = () => {
  const reticleRef = useRef()
  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(reticleRef.current.position, reticleRef.current.quaternion, reticleRef.current.scale);
    reticleRef.current.rotation.set(-Math.PI / 2,0,0)
  })
  const [models, setModels] = useState([])
  function placeModel(e){
    let position = e.intersection.object.position.clone()
    let id = Date.now()
    setModels([{position, id}])
    console.log(models)
  }

  return(
    <>
      <OrbitControls/>
      <ambientLight/>
      {models.map(model=>{
        return <Model key={model.id} position={model.position}/>
      })}
      <Interactive onSelect={placeModel}>
        <mesh ref={reticleRef} position={[0, 0, -20]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[1, 1]}/>
          <meshStandardMaterial color={"green"} />
        </mesh>
      </Interactive>
    </>
  )
}

export default XRHitPositionModel
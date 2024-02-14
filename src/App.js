import { Route, Routes } from "react-router-dom";
import CubeContainer from "./components/Cube/CubeContainer";
import XRCubeContainer from "./components/XRCube/XRCubeContainer";
import XRHitCubeContainer from "./components/XRHitCube/XRHitCubeContainer";
import XRHitModelContainer from "./components/XRHitModel/XRHitModelContainer";
import "./App.css"
import VideoContainer from "./components/XRVideo/VideoContainer";
function App() {
  return (
    <div style={{width:"100%", height:"100vh"}}>
      <Routes>
        <Route path="/" element={<CubeContainer/>}/>
        <Route path="/xr" element={<XRCubeContainer/>}/>
        <Route path="/xr-hit" element={<XRHitCubeContainer/>}/>
        <Route path="/xr-hit-model" element={<XRHitModelContainer/>}/>
        <Route path="xr-video" element={<VideoContainer/>}/>
      </Routes>

    </div>
  );
}

export default App;

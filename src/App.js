import { Route, Routes } from "react-router-dom";
import CubeContainer from "./components/Cube/CubeContainer";
import XRCubeContainer from "./components/XRCube/XRCubeContainer";
import XRHitCubeContainer from "./components/XRHitCube/XRHitCubeContainer";

function App() {
  return (
      <Routes>
        <Route path="/" element={<CubeContainer/>}/>
        <Route path="/xr" element={<XRCubeContainer/>}/>
        <Route path="/xr-hit" element={<XRHitCubeContainer/>}/>
      </Routes>
  );
}

export default App;

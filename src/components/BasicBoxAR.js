// import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import Box from "./Box";
import { Canvas } from "@react-three/fiber";

export default function BasicBoxAR() {
  return (
    <>
      <ARButton/>
      <Canvas>
        <XR>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Box position={[0, 2, -10]} />
          <Box position={[0, -2, -10]} />
        </XR>
      </Canvas>
    </>
  );
}
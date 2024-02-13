import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import Box from "./Box";

export default function BasicBoxAR() {
  return (
    <>
      <ARButton/>
      <Canvas>
        <XR>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </XR>
      </Canvas>
    </>
  );
}
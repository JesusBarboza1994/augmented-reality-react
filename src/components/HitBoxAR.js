import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import HitBox from "./HitBox";
import BasicBoxAR from "./BasicBoxAR";

export default function HitBoxAR() {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ['hit-test']
        }}
      />
      <Canvas>
        <XR>
          <HitBox/>
        </XR>
      </Canvas>
    </>
  );
}
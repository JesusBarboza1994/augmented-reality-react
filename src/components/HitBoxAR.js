import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import HitBox from "./HitBox";

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
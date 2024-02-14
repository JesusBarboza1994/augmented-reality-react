import { Suspense, useEffect } from 'react'
import { useVideoTexture, OrbitControls } from '@react-three/drei'
import urlVideo from "./mrc.mp4";
import { useXR } from '@react-three/xr';
import image from "./logoMRC.png";
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

export default function Video() {
  const { isPresenting } = useXR()
  const imageTexture = useLoader(TextureLoader, image)
  if(!isPresenting){
    return(
      <>
        <OrbitControls/>
        <mesh position={[0, 0, -3]}>
        <planeGeometry args={[8, 2]} />
        <Suspense fallback={null}>
        <meshBasicMaterial map={imageTexture} />
        </Suspense>
      </mesh>
      </>
    )
  } 
  return (
    <>
      <OrbitControls/>
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[3, 3]} />
        <Suspense fallback={null}>
            <VideoMaterial urlVideo={urlVideo} />
        </Suspense>
      </mesh>
    </>
  )
}
function VideoMaterial({ urlVideo }) {
    const texture = useVideoTexture(urlVideo)
    return <meshBasicMaterial map={texture} import urlAudio toneMapped={false} />
}

async function createAudio(url) {
  // Fetch audio data and create a buffer source
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const source = context.createBufferSource();
  source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res));
  source.loop = true;

  // Create gain node and an analyser
  const gain = context.createGain();
  const analyser = context.createAnalyser();
  analyser.fftSize = 64;
  source.connect(analyser);
  analyser.connect(gain);

  // Start playing the audio
  source.start(0);

  // The data array receives the audio frequencies
  const data = new Uint8Array(analyser.frequencyBinCount);

  return {
    context,
    source,
    gain,
    data,
    // This function gets called every frame per audio source
    update: () => {
      analyser.getByteFrequencyData(data);
      // Calculate a frequency average
      return (data.avg = data.reduce((prev, cur) => prev + cur / data.length, 0));
    },
  };
}

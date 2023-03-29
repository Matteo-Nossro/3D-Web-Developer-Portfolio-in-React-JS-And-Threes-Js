import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  // permet l'importation d'un model 3D
  const earth = useGLTF("./planet/scene.gltf");

  return (
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
      <Canvas
          shadows
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,  // réprenste le zoom
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
      >
        {/*doc pour suspence, ça permet d'attendre l'affichage du canvas pour pouvoir par la suite permettre l'interation a la souris*/}
        {/*https://fr.reactjs.org/docs/concurrent-mode-suspense.html*/}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
  );
};

export default EarthCanvas;
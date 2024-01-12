"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/dokkyo.gltf", true);
  return <primitive object={gltf.scene} />;
}

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "skyblue" }}>
      <Canvas camera={{ position: [20, 10, -15] }}>
        <ambientLight intensity={1.0} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <pointLight position={[-10, -10, -10]} intensity={2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

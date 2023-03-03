import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import Web from "../threeObjects/Web";

function WebDesign() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6} shadows="contact">
          <Web />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
}

export default WebDesign;

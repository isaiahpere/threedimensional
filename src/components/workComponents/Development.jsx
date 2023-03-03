import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Computer from "../threeObjects/Computer";

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6} shadows="contact">
          <Computer />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};

export default Development;

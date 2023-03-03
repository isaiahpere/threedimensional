import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import Shoe from "../threeObjects/Shoe";

function ProductDesign() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6} shadows="contact">
          <Shoe />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
}

export default ProductDesign;

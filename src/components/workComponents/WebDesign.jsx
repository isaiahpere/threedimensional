import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";

import Web from "../threeObjects/Web";

const Description = styled.div`
  position: absolute;
  top: 100px;
  right: 100px;
  text-align: justify;
  width: 200px;
  padding: 20px;
  background-color: #fff;
  color: #242424;
  font-weight: 400;
  font-size: 12px;
  border-radius: 24px;
`;

function WebDesign() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6} shadows="contact">
          <Web />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Description>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success
      </Description>
    </>
  );
}

export default WebDesign;

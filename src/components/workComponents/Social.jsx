import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Linkedin from "../threeObjects/Linkedin";
import styled from "styled-components";

const Description = styled.div`
  position: absolute;
  top: 0px;
  right: -100px;
  text-align: justify;
  width: 200px;
  padding: 20px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
  color: #242424;
  font-weight: 500;
  font-size: 12px;
  border-radius: 12px;
  display: none;
  background-color: #d5d8dc;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1024px) {
    top: 0px;
    right: 10px;
    padding: 10px;
  }
  @media (min-width: 1024px) {
    top: 0px;
    right: 100px;
    padding: 10px 20px;
  }
`;

function Social() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6} shadows="contact">
          <Linkedin />
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

export default Social;

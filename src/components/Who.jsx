import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import Cube from "./threeObjects/Cube";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  scroll-snap-align: center;
  scroll-behavior: smooth;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  width: 100%;
  cursor: pointer;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LeftSubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CanvasContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    width: 800px;
    height: 800px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 14px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1440px) {
    font-size: 70px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: lightgray;
  padding: 0 10px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 160px;
    font-size: 16px;
    margin: 0;
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <LeftSubContainer>
            <CanvasContainer>
              <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={5}
                />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube />
              </Canvas>
            </CanvasContainer>
          </LeftSubContainer>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./images/line.png" />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Description>
            A creative group of designers and developers with a passion for the
            arts
          </Description>
          <Button>See our work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;

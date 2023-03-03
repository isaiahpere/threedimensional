import styled from "styled-components";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Navbar from "../modules/navbar";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled(Flex)`
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const Container = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

const Left = styled(Flex)`
  flex: 1;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1024px) {
    padding-left: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 70px;
  }
`;

const WhatWeDo = styled(Flex)`
  gap: 10px;
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

const Right = styled(Flex)`
  flex: 1;
  width: 100%;
  padding-left: 20px;
`;

const RightSubContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CanvaContainer = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;

const ImageContainer = styled(Flex)`
  width: 300px;
  height: 300px;
  object-fit: contain;
  @media (min-width: 768px) {
    width: 600px;
    height: 400px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section id="hero-section">
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./images/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Description>
            I enjoy creating elegant applications that provide amazing user
            experience.
          </Description>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <RightSubContainer>
            <CanvaContainer>
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                  <MeshDistortMaterial
                    color="#3d1c56"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas>
            </CanvaContainer>
            <ImageContainer>
              <Img src="./images/floating.png" />
            </ImageContainer>
          </RightSubContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

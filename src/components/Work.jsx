import { useState } from "react";
import styled from "styled-components";
import ProductDesign from "./workComponents/ProductDesign";
import WebDesign from "./workComponents/WebDesign";
import Development from "./workComponents/Development";
import Social from "./workComponents/Social";

const data = ["Web Design", "Development", "Product Design", "Social Media"];

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  position: relative;

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0%;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 768px) {
    font-size: 70px;
  }
`;

const Right = styled.div`
  flex: 1;
  cursor: pointer;
  position: relative;
  /* display: none; */
`;

const RightSubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CanvaContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: 1440px) {
    width: 800px;
    height: 800px;
  }
`;

const Work = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <RightSubContainer>
            <CanvaContainer>
              {work === "Web Design" && <WebDesign />}
              {work === "Development" && <Development />}
              {work === "Product Design" && <ProductDesign />}
              {work === "Social Media" && <Social />}
            </CanvaContainer>
          </RightSubContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Work;

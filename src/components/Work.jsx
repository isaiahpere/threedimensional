import { useState } from "react";
import styled from "styled-components";
import ProductDesign from "./workComponents/ProductDesign";
import WebDesign from "./workComponents/WebDesign";
import Development from "./workComponents/Development";
import Social from "./workComponents/Social";

const data = ["Web Design", "Development", "Product Design", "Social Media"];

const Section = styled.div`
  position: relative;
  height: 100vh;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
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
`;

const Right = styled.div`
  flex: 1;
  cursor: pointer;
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
          {work === "Web Design" && <WebDesign />}
          {work === "Development" && <Development />}
          {work === "Product Design" && <ProductDesign />}
          {work === "Social Media" && <Social />}
        </Right>
      </Container>
    </Section>
  );
};

export default Work;

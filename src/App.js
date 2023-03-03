import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";

const AppContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  /* background: url("./images/bg.jpeg") center center; */
  background: linear-gradient(
    216deg,
    rgba(106, 138, 231, 1) 5%,
    rgba(158, 75, 56, 1) 45%,
    rgba(125, 190, 184, 1) 88%
  );
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </AppContainer>
  );
};

export default App;

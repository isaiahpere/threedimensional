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
  background: url("./images/bg.jpeg") center center;
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
      {/* <Contact /> */}
    </AppContainer>
  );
};

export default App;

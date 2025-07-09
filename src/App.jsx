import { useState } from "react";
import "./App.css";
import StartGame from "./StartGame";
import GamePlay from "./GamePlay";
import styled from "styled-components";

function App() {
  const [isGamePlay, setisGamePlay] = useState(false);
  const setToggle = () => {
    setisGamePlay((prev) => !prev);
  };
  return (
    <Main>{isGamePlay ? <GamePlay /> : <StartGame toggle={setToggle} />}</Main>
  );
}

export default App;
const Main = styled.div`
  margin: 0 auto;
  min-height: 100vh;
`;

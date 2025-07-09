import React from "react";
import styled from "styled-components";
// import Button from "./Button";
import { Button } from "./Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="container">
        <div>
          <img src="/images/dices.png" alt="" />
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  height: 100vh;
  width: 1180px;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container img {
    height: 500px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }
  .content h1 {
    font-size: 86px;
    white-space: nowrap;
    /* word-spacing: -15px; */
  }
`;

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "./Button";

const RollDice = ({ currentData, rollDice, reset }) => {
  const [showRules, setshowRules] = useState(false);
  const toggle = () => {
    setshowRules((prev) => !prev);
  };
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice-${currentData}.png`} alt="img" />
      </div>
      <p>Click on Dice to Roll</p>
      <div className="btns">
        <OutlineButton onClick={reset}>RESET</OutlineButton>
        <Button onClick={toggle}>Show Rules</Button>
      </div>
      {showRules && (
        <div className="show-rules">
          <h1>How to play dice game</h1>
          <p>Select any Number</p>
          <p>Click on dice image</p>
          <p>
            If the dice number matches the selected number you get the same
            number as your score.
          </p>
          <p>If your guess is wrong two points will be deducted.</p>
        </div>
      )}
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
    font-weight: 200;
  }
  .dice img {
    width: 10rem;
    height: 10rem;
  }
  .btns {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  .show-rules {
    /* margin: 10px auto; */
    /* min-width: 700px; */
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
    margin-top: 30px;
    max-width: 700px;
    background-color: #cac7c7;
    padding: 30px;
    border-radius: 5px;
    outline: 1px solid #222;
    margin: 90px;
  }
`;

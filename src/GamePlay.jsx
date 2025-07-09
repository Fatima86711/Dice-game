import React from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
const GamePlay = () => {
  // const[]
  const [score, setScore] = useState(0);
  const [currentData, setCurrentData] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState();
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const reset = () => {
    setScore(0);
  };
  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please Select Number First.");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentData((prev) => randomNumber);
    console.log(currentData);
    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
      console.log("yes it is true;");
    } else {
      console.log("FAlse");
      setScore((prev) => prev - 2);
    }
    // setSelectedNumber(undefined);
  };
  return (
    <MainContainer>
      <div className="top">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setError={setError}
          error={error}
        />
      </div>
      <RollDice currentData={currentData} rollDice={rollDice} reset={reset} />
    </MainContainer>
  );
};

export default GamePlay;
const MainContainer = styled.div`
  /* margin-top: 5px; */
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

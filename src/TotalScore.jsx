import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>TOTAL SCORE </p>
    </ScoreContainer>
  );
};

export default TotalScore;
const ScoreContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Libertinus+Mono&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Tektur:wght@400..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

  max-width: 200px;
  /* background-color: #222; */
  text-align: center;
  h1 {
    font-size: 100px;

    font-family: "Poppins", sans-serif;
  }
  p {
    font-size: 24px;
    font-weight: 1000;

    /* font-family: "Poppins", sans-serif; */
  }
`;

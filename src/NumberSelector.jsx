import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  setError,
  error,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  //   console.log(selectedNumber);
  function errorHandler(value) {
    setSelectedNumber(value);
    setError("");
  }
  return (
    <NumberSelectorContainer>
      <p style={{ color: "red" }}>{error}</p>
      <div className="flex">
        {numbers.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => errorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p style={{}}>SELECT NUMBER</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 13px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 800;

  transition: 0.3s all ease-in-out;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    background-color: black;
    color: #fff;
    transition: 0.3s all ease-in-out;
  }
`;

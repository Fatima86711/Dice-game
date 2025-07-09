import styled from "styled-components";
export const Button = styled.button`
  padding: 20px;
  transition: 0.3s all ease-in;
  background-color: #222;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 3px;
  color: white;
  min-width: 10rem;
  border: 1px solid #222;

  &:hover {
    transition: 0.3s all ease-in;
    background-color: #fff;

    color: #222;
    border: 1px solid #222;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: #fff;
  color: #222;
  &:hover {
    background-color: #222;
    color: #fff;
  }
`;

import { styled } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  color: #000000de;
  background-color: #ff9800;
  font-size: 14px;
  font-weight: bold;
  width: 20%;
  min-width : 100px;
  padding: 0.7vw;
  margin-top: 10px;
  outline: 0;
  cursor: pointer;
  &:hover {
    background-color: #db8708;
  }
`;
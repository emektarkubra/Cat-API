import { styled } from "styled-components";

export const StyledCatBreedsFormBox = styled.div`
  padding: 2vw;
  display: flex;
  justify-content: center;

  & > .select-form {
    & > label {
      font-size: 14px;
      color: #00000099;
      padding-left: 0.5vw;
    }
    & > #cats {
      font-size: 16px;
      width: 434px;
      outline: 0;
      border: 1px solid white;
      border-bottom: 1px solid black;
    }
  }
`;
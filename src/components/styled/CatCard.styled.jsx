import { styled } from "styled-components";

export const StyledCatCard = styled.div`
  color: #000000de;

  .card {
    box-shadow: 1px 2px 5px 2px gray;
    padding: 2em;
    & > .card-body {
      font-size: 20px;
      & > .card-title {
        font-size: 24px;
        margin: 15px 0 0 0;
      }
      & > .breed-info-list {
        margin-top: 5rem;
        font-size: 14px;
        & > .breed-info {
          font-size: 16px;
          & > p {
            color: blue;
            width: 150px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;
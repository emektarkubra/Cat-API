import { styled } from "styled-components";

export const StyledCatCard = styled.div`
  color: #000000de;

  .card {
    overflow-y: scroll;
    box-shadow: 1px 2px 5px 2px gray;
    padding: 2em;
    height: 70vw;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: #eaeaea;
      border-left: 1px solid #ccc;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #596971;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #2e3944;
    }
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

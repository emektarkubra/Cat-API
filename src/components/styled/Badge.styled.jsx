import { styled } from "styled-components";

export const StyledBadge = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > .badge-info {
    background-color: rgb(224, 224, 224);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 550;
    height: 30px;
    width: auto;
    border-radius: 24px;
    padding: 0 10px 0 10px;
    margin: 0 10px 5px 0;
    & > .img-box {
      border-radius: 5px;
      & > .img {
        object-fit: contain;
        width: 30px;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

import { styled } from "styled-components";

export const StyledCatImageSlider = styled.div`
  * {
    margin: 0%;
    padding: 0%;
    font-family: Raleway;
    box-sizing: border-box;
    scroll-behavior: smooth; //
  }

  .header {
    width: 100%;
  }

  .slider {
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    justify-content: space-between;

    cursor: default;
  }

  .slider::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  .testimonal {
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .user {
    width: 100%;
    height: 100%;
  }
  .img {
    width: 650px;
    height: 400px;
    object-fit: cover;
  }

  .slider-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px;
  }
  .dot {
    cursor: pointer;
    height: 1.1vw;
    width: 1.1vw;
    margin: 0 6px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .dot:hover {
    background-color: #717171;
  }

  .active {
    background-color: #717171;
  }
`;

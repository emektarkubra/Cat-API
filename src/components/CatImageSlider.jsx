import { useState } from "react";
import useCatBreedImagesApi from "../customHook/useCatBreedImagesApi";
import { StyledCatImageSlider } from "./styled/CatImageSlider.styled";

export default function CatImageSlider() {
  const [data] = useCatBreedImagesApi();
  console.log(data);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <StyledCatImageSlider>
        <div className="header">
          <div className="container">
            <div className="slider">
              {data.map((item, index) => (
                <div className="testimonal" id={`testimonal-${index + 1}`}>
                  <div className="img">
                    <img src={item.url} alt="" className="user" />
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-btn">
              {data.map((item, index) => (
                <a
                  onClick={() => handleActiveIndex(index)}
                  href={`#testimonal-${index + 1}`}>
                  <span
                    className={`dot ${
                      activeIndex === index ? "active" : ""
                    } `}></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </StyledCatImageSlider>
    </>
  );
}

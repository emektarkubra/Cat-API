import { useState } from "react";
import useCatBreedImagesApi from "../customHook/useCatBreedImagesApi";
import LoadingComponent from "./LoadingComponent";
import { StyledCatImageSlider } from "./styled";

export default function CatImageSlider() {
  const [data, isLoading, isError, errorMessage] = useCatBreedImagesApi();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <StyledCatImageSlider>
        <div className="header">
          <div className="container">
            {isError ? (
              <h2>{errorMessage}</h2>
            ) : isLoading ? (
              <LoadingComponent />
            ) : (
              <div className="slider">
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className="testimonal"
                    id={`testimonal-${index + 1}`}>
                    <div className="img">
                      <img
                        src={item.url}
                        alt="img not found"
                        className="user"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="slider-btn">
              {data.map((item, index) => (
                <a
                  key={item.id}
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

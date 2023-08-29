import useCatBreedApi from "../customHook/useCatBreedApi";
import { StyledCatCard } from "./styled/CatCard.styled";
import { BsStarFill, BsStar } from "react-icons/bs";
import Badge from "./Badge";
import Button from "./Button";
import { StyledButton } from "./styled";
import CatImageSlider from "./CatImageSlider";

export default function CatCard() {
  const [breed] = useCatBreedApi();

  return (
    <>
      <StyledCatCard>
        <div className="card">
          <CatImageSlider />
          <Badge />
          <div className="card-body">
            <h5 className="card-title">{breed.name}</h5>
            <p className="card-text">{breed.description}</p>
            <div>---</div>
            <p className="card-temperament">{breed.temperament}</p>

            <div className="breed-info-list">
              {Object.keys(breed).map((key, index) =>
                typeof breed[key] === "number" && breed[key] > 0 ? (
                  <div key={index} className="breed-info">
                    <h4>
                      {(key[0].toUpperCase() + key.slice(1)).replace("_", " ")}
                    </h4>
                    <p>
                      {[...Array(breed[key])].map((item, index) => (
                        <BsStarFill key={index} />
                      ))}
                      {[...Array(5 - breed[key])].map((item, index) => (
                        <BsStar key={index} />
                      ))}
                    </p>
                  </div>
                ) : null
              )}
            </div>
            <a href={breed.wikipedia_url} target="_blank">
              <Button>WIKIPEDIA </Button>
            </a>
          </div>
        </div>
      </StyledCatCard>
    </>
  );
}

import useCatBreedApi from "../customHook/useCatBreedApi";
import { StyledBadge } from "./styled";

export default function Badge({ children }) {
  const [breed] = useCatBreedApi();

  return (
    <>
      <StyledBadge>
        <div className="badge-info">
          <div className="img-box">
            <img
              className="img"
              src={`https://flagsapi.com/${breed.country_code}/flat/64.png`}
            />
          </div>
          <p>{breed.origin}</p>
        </div>
        {breed.natural > 0 ? <div className="badge-info">Natural</div> : null}
        {breed.rare > 0 ? <div className="badge-info">Rare</div> : null}
        {breed.hypoallergenic > 0 ? (
          <div className="badge-info">Hypoallergenic</div>
        ) : null}
        {breed.rex > 0 ? <div className="badge-info">Rex</div> : null}
        {breed.hairless > 0 ? <div className="badge-info">Hairless</div> : null}
        {breed.suppressed_tail > 0 ? (
          <div className="badge-info">Suppressed tail</div>
        ) : null}
      </StyledBadge>
    </>
  );
}

import { useContext } from "react";
import { CatContext } from "../context/CatContext";
import useCatBreedsApi from "../customHook/useCatBreedsApi";
import { StyledCatBreedsFormBox } from "./styled/CatBreedsForm.styled";

export default function CatBreedsForm() {
  const [data, isLoading, isError, error] = useCatBreedsApi();
  const { handleChangeId } = useContext(CatContext);

  return (
    <StyledCatBreedsFormBox>
      <form className="select-form">
        <label htmlFor="cars">Breeds</label>
        <br />
        <select onChange={handleChangeId} name="cats" id="cats">
          {data?.map((item) => (
            <option key={item.id} value={`${item.id}`}>
              {item.name}
            </option>
          ))}
        </select>
      </form>
    </StyledCatBreedsFormBox>
  );
}

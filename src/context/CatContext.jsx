import { useState } from "react";
import { createContext } from "react";

export const CatContext = createContext();

export default function CatContextProvider({ children }) {
  const [breedId, setBreedId] = useState("abys");

  const handleChangeId = (e) => setBreedId(e.target.value);

  return (
    <>
      <CatContext.Provider value={{ handleChangeId, breedId }}>
        {children}
      </CatContext.Provider>
    </>
  );
}

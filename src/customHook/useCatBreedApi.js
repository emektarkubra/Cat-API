import { useContext, useEffect, useState } from "react";
import { CatContext } from "../context/CatContext";
import { axiosCatApi } from "./axiosApi";

export default function useCatBreedApi() {
  const [breed, setBreed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const { breedId } = useContext(CatContext);

  const getData = async () => {
    const response = await axiosCatApi.get(`/breeds/${breedId}`);
    const responseData = await response?.data;
    if (response.status !== 200) {
      setIsError(true);
      setErrorMessage("Veri alınamadı");
      throw new Error("Veri alınamadı");
    }
    setBreed(responseData);
    console.log(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [breedId]);

  return [breed, isLoading, isError, errorMessage];
}
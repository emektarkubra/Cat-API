import { useContext, useEffect, useState } from "react";
import { CatContext } from "../context/CatContext";
import { axiosCatApi } from "./axiosApi";

export default function useCatBreedImagesApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const { breedId } = useContext(CatContext);

  const getData = async () => {
    const response = await axiosCatApi.get(
      `/images/search?limit=10&breed_ids=${breedId}`
    );
    const responseData = await response?.data;
    if (response.status !== 200) {
      setIsError(true);
      setErrorMessage("Resim yüklenemedi");
      throw new Error("Veri alınamadı");
    }
    setData(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [breedId]);

  return [data, isLoading, isError, errorMessage];
}
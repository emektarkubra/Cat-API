import { useContext, useEffect, useState } from "react";
import { CatContext } from "../context/CatContext";
import { axiosCatApi } from "./axiosApi";

export default function useCatBreedApi() {
  const [breed, setBreed] = useState([]);
  const { breedId } = useContext(CatContext);

  const getData = async () => {
    const response = await axiosCatApi.get(`/breeds/${breedId}`);
    const responseData = await response?.data;
    if (response.status !== 200) {
      throw new Error("Veri alınamadı");
    }
    setBreed(responseData);
  };

  useEffect(() => {
    getData();
  }, [breedId]);

  return [breed];
}

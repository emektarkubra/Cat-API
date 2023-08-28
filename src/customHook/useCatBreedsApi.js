import { useEffect, useState } from "react";
import { axiosCatApi } from "./axiosApi";

export default function useCatBreedsApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const getData = async () => {
    const response = await axiosCatApi.get("/breeds");
    const responseData = await response?.data;
    if (response.status !== 200) {
      setIsError(true);
      setErrorMessage("Veri alınamadı");
      throw new Error("Veri alınamadı");
    }
    setData(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading, isError, errorMessage];
}

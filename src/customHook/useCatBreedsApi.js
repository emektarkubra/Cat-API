import { useEffect, useState } from "react";
import { axiosCatApi } from "./axiosApi";

export default function useCatBreedsApi() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axiosCatApi.get("/breeds");
    const responseData = await response?.data;
    if (response.status !== 200) {
      throw new Error("Veri alınamadı");
    }
    setData(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  return [data];
}

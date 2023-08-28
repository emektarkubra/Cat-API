import axios from "axios";

const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY;
const VITE_CAT_API_BASE_URL = import.meta.env.VITE_CAT_API_BASE_URL;

export const axiosCatApi = axios.create({
  baseURL: VITE_CAT_API_BASE_URL,
  headers: {
    "x-api-key": VITE_CAT_API_KEY,
  },
});

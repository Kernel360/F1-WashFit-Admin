import axios from "axios";

export const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_HOST,

  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

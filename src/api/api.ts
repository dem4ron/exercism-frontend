import axios from "axios";

export const BASE_URL = "https://exercism.org/api/v2";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
});

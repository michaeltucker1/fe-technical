import axios from "axios";

const api = axios.create({
  baseURL: "https://test.swipejobs.com/api",
});

export default api;
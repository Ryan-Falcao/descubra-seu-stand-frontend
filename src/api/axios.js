import axios from "axios";

const api = axios.create({
  baseURL: "https://descubra-seu-stand-backend.onrender.com",
});

export default api;

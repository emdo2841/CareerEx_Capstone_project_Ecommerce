import axios from "axios";

const api = axios.create({
  baseURL: "https://ecoomerce-store-t40x.onrender.com/api", // Your Express API
  withCredentials: true, // Include cookies for session handling
});

export default api;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", 
  withCredentials: true, // optional: if your backend uses cookies
});

export default axiosInstance;

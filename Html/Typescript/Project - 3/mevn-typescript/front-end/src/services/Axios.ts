import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:7000/api",
  headers: {
    'Content-Type': 'application/josn',
  },
});

export default axiosInstance;
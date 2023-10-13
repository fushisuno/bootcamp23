import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://7000-fushisuno-bootcamp23-43vrt2rlr6y.ws-us105.gitpod.io/api",
  headers: {
    'Content-Type': 'application/josn',
  },
});

export default axiosInstance;
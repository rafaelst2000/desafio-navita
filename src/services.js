import axios from "axios";

const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

const axiosInstance = axios.create({
  baseURL: url
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  }
};

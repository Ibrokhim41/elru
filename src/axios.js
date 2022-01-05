import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://data.elru.uz/ru/",
});

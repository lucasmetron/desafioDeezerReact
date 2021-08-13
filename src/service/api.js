import axios from "axios";

const api = axios.create({
    baseURL: "https://api.deezer.com/",
});

export default api;
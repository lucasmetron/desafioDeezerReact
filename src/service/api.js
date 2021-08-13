import axios from "axios";


const api = axios.create({
    baseURL: "http://cors-anywhere.herokuapp.com/https://api.deezer.com",
});

export default api;
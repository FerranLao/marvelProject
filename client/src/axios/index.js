import axios from "axios"


const instance = axios.create({
    // baseURL: "https://gateway.marvel.com/v1/public",
    baseURL: "http://localhost:3000/marvel",
    withCredentials: true,
    "Access-Control-Allow-Origin": 'http://localhost:3001'

})

export default instance
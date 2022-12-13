import axios from 'axios'
import authHeader from "@/services/auth-header.js";
const Api = axios.create({

    baseURL:'http://localhost:8090/api',
    headers: authHeader()
})

export default Api
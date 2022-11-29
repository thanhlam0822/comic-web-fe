import axios from 'axios'
let timeOut = 5000
const Api = axios.create({

    baseURL:'http://localhost:8090/api'

})

export default Api
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:9000'
})

export default service
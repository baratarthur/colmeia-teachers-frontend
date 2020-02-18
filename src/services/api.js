import axios from 'axios'

const service = axios.create({
    baseURL: 'https://colmeia-teachers-api.herokuapp.com/'
})

export default service
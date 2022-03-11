import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://collectionapi.metmuseum.org'
})

export default instance
import axios from "axios"

const API_URL = 'https://cyberforestapi.vercel.app/api/'

const blogList = () => {
    return axios.get(API_URL + 'blog/userblog')
}

const blogDetail = (id) => {
    return axios.get(API_URL + 'blog/blogdetail/' + id)
}

export default {
    blogList,
    blogDetail
}
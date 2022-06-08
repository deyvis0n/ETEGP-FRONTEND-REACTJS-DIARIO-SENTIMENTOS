import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://diario-de-sentimentos-api.herokuapp.com/api'

class UserService {
    postUserPost(message) {
        return axios
        .post(API_URL + '/user-post', { message }, { headers: authHeader() })
        .then(response => {
            console.warn(response.data)
        })
    }

    getUserPost() {
        return axios
        .get(API_URL + '/user-post', { headers: authHeader() })
        .then(response => {
            return response.data
        })
    }

    deleteUserPost(id) {
        return axios
        .post(API_URL + '/user-post-delete', { id }, { headers: authHeader() })
    }

    getRecentPost() {
        return axios
        .get(API_URL + '/all-post', { headers: authHeader() })
        .then(response => {
            return response.data
        })
    }

}

export default new UserService();
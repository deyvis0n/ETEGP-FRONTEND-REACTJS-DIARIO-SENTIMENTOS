import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://api-diario-sentimetos.herokuapp.com/api/user'

class UserService {
    postUserPost(userMessage, username) {
        return axios
        .post(API_URL + '/postMessage', { userMessage, username }, { headers: authHeader() })
    }

    getUserPost() {
        return axios
        .get(API_URL + '/getUserPost', { headers: authHeader() })
        .then(response => {
            
            return response.data
        })
    }

    deleteUserPost(_id) {
        return axios
        .post(API_URL + '/deleteUserPost', { _id }, { headers: authHeader() })
    }

    getUserName( _id ) {
        return axios
        .get(API_URL + '/getUserName', { _id })
        .then(response => {
            return response.data
        })
    }

    getRecentPost() {
        return axios
        .get(API_URL + '/getRecentPosts', { headers: authHeader() })
        .then(response => {
            return response.data
        })
    }

}

export default new UserService();
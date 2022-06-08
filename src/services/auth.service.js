import axios from 'axios'

const API_URL = 'https://diario-de-sentimentos-api.herokuapp.com/api'

class AuthService {
    login(email, password) {
        return axios.post(API_URL + '/login', {
            email,
            password
        })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }

    logou() {
        localStorage.removeItem('user')
    }

    register(name, email, password, passwordConfirmation) {
        return axios.post(API_URL + '/signup', {
            name,
            email,
            password,
            passwordConfirmation
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default new AuthService()
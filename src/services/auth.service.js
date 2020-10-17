import axios from 'axios'
import { use } from 'vue/types/umd';

const API_URL = 'http://localhost:8000/api/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if(response.data.accessToken){
                    localStorage.setItem('user', JSON.stringify(response.data))
                }

                return response.data
            })
    }

    logout(){
        localStorage.removeItem('user')
    }

    register(user){
        return axios.post(API_URL + 'register',{
            email:user.email,
            name:user.name,
            password:user.password
        })
    }
}

export default new AuthService();
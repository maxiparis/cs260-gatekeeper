import axios from 'axios';
import {TOKEN_KEY} from "./constants";

export class ApiService {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL || 'http://localhost:3000/api',
            timeout: 5000
        });
    }

    setAuthToken() {
        const token = localStorage.getItem(TOKEN_KEY);

        if (token) {
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            //TODO:
            console.warn("setAuthToken: no token found")
        }
    }

    removeAuthToken() {
        delete this.client.defaults.headers.common['Authorization'];
    }

    async createAccount(userData) {

        try {
            const response = await this.client.post('/auth/create', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('createAccount response:', response);
            return response;
        } catch (error) {
            // this.handleError(error);
            console.error(error);
            throw error;  // Optional: Re-throw error if you want the calling code to handle it
        }
    }
}
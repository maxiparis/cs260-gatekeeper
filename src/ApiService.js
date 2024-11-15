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
            console.error(error);
            throw error
        }
    }

    async login(userData) {
        try {
            const response = await this.client.post('/auth/login', userData)
            console.log('login response:', response)
            return response
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async logout(token) {
        try {
            const response = await this.client.delete('/auth/logout', { data: token });
            console.log('logout response:', response);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getLogbookEntries(token) {
        try {
            const response = await this.client.get('/entries', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('getLogbookEntries response:', response)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createLogbookEntry({ data, token }) {
        try {
            const response = await this.client.post('/entry', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('createLogbookEntryEntry:', response)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}
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

    async getLogbookEntries() {
        try {
            this.setAuthToken()
            const response = await this.client.get('/entries' )
            console.log('getLogbookEntries response:', response)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async createLogbookEntry({ data }) {
        try {
            this.setAuthToken()
            const response = await this.client.post('/entry', data )
            console.log('createLogbookEntryEntry:', response)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async removeLogbookEntry({ id }) {
        try {
            this.setAuthToken();
            const response = await this.client.delete(`/entry`, {
                data: { id: id }
            })
            console.log('deleteLogbookEntryEntry:', response)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}
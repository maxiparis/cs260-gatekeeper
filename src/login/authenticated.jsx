import React from "react";
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {FIRSTNAME_KEY, LOGBOOK_ENTRIES_KEY, TOKEN_KEY} from "../constants";
import {ApiService} from "../ApiService";


export default function Authenticated({ username, onLogout }) {
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            const apiCaller = new ApiService()

            const token = localStorage.getItem(TOKEN_KEY)
            const tokenData = { token: token }
            await apiCaller.logout(tokenData);

            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(FIRSTNAME_KEY);
            localStorage.removeItem(LOGBOOK_ENTRIES_KEY);

            onLogout();
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <>
            <div className="d-flex flex-column mb-5">
                <h1>Welcome, {username}</h1>
            </div>

            <div className="signup-form-width d-flex flex-column gap-4" >
                <Button onClick={() => navigate('/logbook')}>
                    Go to Logbook
                </Button>

                <Button
                    variant="outline-danger"
                    onClick={() => handleLogout()}
                >
                    Logout
                </Button>
            </div>
        </>

    );
}
import React from "react";
import {Button, Row} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function Authenticated({ username, onLogout }) {
    const navigate = useNavigate();

    function handleLogout() {
        //localstorage
        onLogout();
    }

    return (
        <div className="d-flex flex-column gap-5">
            <h1>Welcome, {username}</h1>

            <div className="d-flex flex-column gap-4" >
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

        </div>
    );
}
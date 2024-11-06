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
            <Row>
                <h1>Welcome, {username}</h1>
            </Row>
            <Row className="gap-3">
                <Row>
                    <Button onClick={() => navigate('/logbook')}>
                        Go to Logbook
                    </Button>
                </Row>
                <Row>
                    <Button
                        variant="outline-danger"
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </Button>

                </Row>
            </Row>
        </div>
    );
}
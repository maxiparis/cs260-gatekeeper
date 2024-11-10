import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from "react-bootstrap";

export default function SignUpInvitationCard() {
    const navigateTo = useNavigate();
    return (
        <div className="custom-card card text-center p-4 my-5">
            <div className="card-body">
                <div className="my-3">
                    <h4>Try it today! 👇</h4>
                    <Button
                        size="lg"
                        onClick={ () => navigateTo("/signup")}>
                        Create Account
                    </Button>
                </div>

                <div className="my-">
                    <h4>Already a member? ✅</h4>
                    <Button
                        size="lg"
                        onClick={ () => navigateTo('/login') }
                    >
                        Log in to your account
                    </Button>
                </div>
            </div>
        </div>
    )
}
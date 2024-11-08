import React from 'react';

export default function SignUpInvitationCard() {
    return (
        <div className="custom-card card text-center p-4 my-5">
            <div className="card-body">
                <div className="my-3">
                    <h4>Try it today! 👇</h4>
                    <a href="../signup/signup.html" className="btn btn-primary btn-lg mb-3">Create account</a>
                </div>

                <div className="my-">
                    <h4>Already a member? ✅</h4>
                    <a href="../login/login.html" className="btn btn-outline-primary btn-lg">Log in to your
                        account</a>
                </div>
            </div>
        </div>
    )
}
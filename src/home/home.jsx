import React from 'react';
import SignUpInvitationCard from "./signUpInvitationCard";
import Authenticated from "../login/authenticated";
import {AuthState} from "../login/authState";

export function Home( { authState }) {
    return (
        <main
            className="container d-flex flex-column flex-wrap flex-grow-1 align-items-center justify-content-center px-5">
            <section className="hero d-flex py-5 ">
                <div className="d-flex flex-wrap justify-content-center">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center px-md-4 px-sm-2 mb-md-5">
                        <h1>Welcome to <strong>GateKeeper!</strong></h1>
                        <h2>The Ultimate Logbook Replacement</h2>
                    </div>

                    <div className="d-flex flex-column">
                        <img src="/security.jpg" alt="A security guard" className="img-fluid rounded-4"/>
                    </div>
                </div>
            </section>

            <p className="text-justify text-muted fs-5 lh-lg mb-4">
                Designed to make logging easier and more accurate, GateKeeper allows security guards, law and parking
                enforcement officers, custodians, building and facility managers, and more to quickly record
                and track events in real-time. No more messy paperwork or hard-to-read entries — this app
                streamlines the process with powerful search and filtering features, so finding logs by category
                or keyword is faster than ever. Plus, with live data updates, your entire team stays in sync,
                receiving the latest information on the go, ensuring that everyone is always up to date.
            </p>

            { authState === AuthState.Unauthenticated && (
                <SignUpInvitationCard />
            )}

        </main>
    );
}
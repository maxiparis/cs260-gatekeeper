import React from 'react';
import {AuthState} from "./authState";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";
import {USERNAME_KEY} from "../constants";

export function Login({username, authState, onAuthStateChange}) {
    return (
        <main
            className="container-fluid d-flex flex-column flex-wrap flex-grow-1 align-items-center justify-content-top px-3 px-sm-5 pt-5">

            {authState === AuthState.Authenticated &&
                <Authenticated
                    username={ username }
                    onLogout={() => {
                        localStorage.removeItem(USERNAME_KEY);
                        onAuthStateChange(username, AuthState.Unauthenticated);
                    }}
                />
            }

            {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                    onAuthenticate={(username, authState) => {
                        localStorage.setItem(USERNAME_KEY, username)
                        onAuthStateChange(username, authState)
                    }}
                />
            )}
        </main>
    );
}
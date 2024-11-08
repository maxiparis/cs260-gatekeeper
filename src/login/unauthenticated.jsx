import React, {useState} from "react";
import {AuthState} from "./authState";

export default function Unauthenticated({ onAuthenticate }) {

    const [usernameLabel, setUsernameLabel] = useState("");
    const [passwordLabel, setPasswordLabel] = useState("")
    const [error, setError] = useState("");
    let authenticatedUser = {}

    const testUser = {
        username: "a",
        password: "a",
        firstName: "Jack",
        lastName: "Harrison",
    }

    function handleAuthentication() {
        if (authenticateUser()) {
            authenticatedUser = testUser;
            onAuthenticate(authenticatedUser.firstName, AuthState.Authenticated)
        } else {
            setError("The password you have entered does not exist.")
        }
    }

    function authenticateUser() {
        return usernameLabel === testUser.username && passwordLabel === testUser.password
    }

    return (
        <>
            <h1>Log in to your account</h1>
            <form className="login-form-width d-flex flex-column align-items-center justify-content-center">
                <div className="form-group my-3 w-100">
                    <label htmlFor="inputUsername1">Username</label>
                    <input
                        type="text"
                        className="form-control w-100"
                        id="inputUsername1"
                        placeholder="Enter username"
                        onChange={(e) => setUsernameLabel(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3 w-100">
                    <label htmlFor="inputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control w-100"
                        id="inputPassword1"
                        placeholder="Password"
                        onChange={(e) => setPasswordLabel(e.target.value)}
                    />
                </div>
            </form>



            <button
                type="submit"
                className="login-form-width btn btn-primary"
                disabled={ usernameLabel === "" || passwordLabel === "" }
                onClick={ () => handleAuthentication() }
                // onClick={ () => setError("The passwordLabel you have entered does not exist") }
                // onClick={ () => onAuthenticate(usernameLabel, AuthState.Authenticated) }

            >
                Login
            </button>

            { error &&
                <h5 className="text-danger m-3 ">{error}</h5>
            }
        </>
    );
}
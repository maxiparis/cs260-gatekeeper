import React, {useState} from "react";
import {AuthState} from "./authState";
import {FIRSTNAME_KEY, LASTNAME_KEY, TOKEN_KEY} from "../constants";
import {ApiService} from "../ApiService";

export default function Unauthenticated({ onAuthenticate }) {

    const [usernameLabel, setUsernameLabel] = useState("");
    const [passwordLabel, setPasswordLabel] = useState("")
    const [error, setError] = useState("");

    async function handleAuthentication() {
        try {
            const apiCaller = new ApiService()
            const userData = { username: usernameLabel, password: passwordLabel }
            const response = await apiCaller.login(userData)

            const firstName = response.data.firstName
            const lastName = response.data.lastName

            localStorage.setItem(FIRSTNAME_KEY, firstName);
            localStorage.setItem(LASTNAME_KEY, lastName);
            localStorage.setItem(TOKEN_KEY, response.data.token);

            onAuthenticate(firstName, AuthState.Authenticated);
        } catch (error) {
            setError("The password/username you have entered does not exist/match.")
        }
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
                disabled={ !usernameLabel || !passwordLabel  }
                onClick={ () => handleAuthentication() }
            >
                Login
            </button>

            { error &&
                <h5 className="text-danger m-3 ">{error}</h5>
            }
        </>
    );
}
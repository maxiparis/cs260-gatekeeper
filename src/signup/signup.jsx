import React from 'react';
import {Button} from "react-bootstrap";
import {testUser, FIRSTNAME_KEY, TOKEN_KEY} from "../constants";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {ApiService} from "../ApiService";

export function Signup({ onSignUp }) {
    const navigateTo = useNavigate();

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState("");
    const [nameError, setNameError] = React.useState("");

    const apiService = new ApiService()

    async function handleSignup() {

        try {
            const body = {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            }
            const response = await apiService.createAccount(body);

            console.log(response)

            localStorage.setItem(TOKEN_KEY, response.data.token); //TODO: CAUSING A BUG
            localStorage.setItem(FIRSTNAME_KEY, firstName);
            onSignUp(firstName);
            navigateTo("/login");

        } catch (error) {
            setError(error.response.data.message);
        }

    }

    function containsNonLetters(str) {
        if (str === "") {
            return false
        }
        return /[^a-zA-Z]/.test(str);
    }

    function validateName(name, isFirstName) {
        isFirstName ? setFirstName(name) : setLastName(name)

        if (containsNonLetters(name) || containsNonLetters(isFirstName ? lastName : firstName)) {
            setNameError("Names can only contain letters.");
        } else {
            setNameError("");
        }
    }

    return (
        <main
            className="container-fluid d-flex flex-column flex-wrap flex-grow-1 align-items-center justify-content-top px-2 px-sm-5 pt-5">
            <h1>Create an account</h1>

            <form className="signup-form-width d-flex flex-column align-items-center justify-content-center mt-3">
                <div className="form-group row w-100 gap-2">
                    <div className="col w-100 p-0">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Enter your first name"
                            onChange={(e) => validateName(e.target.value, true)}
                        />
                    </div>

                    <div className="col w-100 p-0">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Enter your last name"
                            onChange={(e) => validateName(e.target.value, false)}
                        />
                    </div>

                    { nameError &&
                        <p className="text-danger">{nameError}</p>
                    }
                </div>

                <div className="form-group my-3 w-100">
                    <label htmlFor="inputUsername1">Username</label>
                    <input
                        type="text"
                        className="form-control w-100"
                        id="inputUsername1"
                        placeholder="Create a username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3 w-100">
                    <label htmlFor="inputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control w-100"
                        id="inputPassword1"
                        placeholder="Create a password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>

            <Button
                variant="primary"
                disabled={ nameError || !firstName || !lastName || !username || !password }
                className="signup-form-width"
                onClick={() => { handleSignup() }}
            >
                Sign up
            </Button>

            { error &&
                <h5 className="text-danger m-3 ">{error}</h5>
            }

        </main>
    );
}
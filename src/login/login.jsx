import React from 'react';

export function Login() {
    return (
        <main
            className="container-fluid d-flex flex-column flex-wrap flex-grow-1 align-items-center justify-content-top px-3 px-sm-5 pt-5">
            <h1>Log in to your account</h1>
            <form className="login-form-width d-flex flex-column align-items-center justify-content-center">
                <div className="form-group my-3 w-100">
                    <label htmlFor="inputEmail1">Email address</label>
                    <input type="email" className="form-control w-100" id="inputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                </div>

                <div className="form-group mb-3 w-100">
                    <label htmlFor="inputPassword1">Password</label>
                    <input type="password" className="form-control w-100" id="inputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </main>
    );
}
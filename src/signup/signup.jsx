import React from 'react';

export function Signup() {
    return (
        <main
            className="container-fluid d-flex flex-column flex-wrap flex-grow-1 align-items-center justify-content-top px-2 px-sm-5 pt-5">
            <h1>Create an account</h1>

            <form className="signup-form-width d-flex flex-column align-items-center justify-content-center mt-3">
                <div className="form-group row w-100 gap-2">
                    <div className="col w-100 p-0">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"/>
                    </div>

                    <div className="col w-100 p-0">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter your last name"/>
                    </div>
                </div>
                <div className="form-group my-3 w-100">
                    <label htmlFor="inputEmail1">Email address</label>
                    <input type="email" className="form-control w-100" id="inputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                </div>

                <div className="form-group mb-3 w-100">
                    <label htmlFor="inputPassword1">Password</label>
                    <input type="password" className="form-control w-100" id="inputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign up</button>
            </form>

        </main>
    );
}
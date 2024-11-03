import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body bg-light container-fluid d-flex flex-column min-vh-100">

        <header
            className="custom-header d-flex flex-wrap align-items-center justify-content-between justify-content-lg-around py-3 px-sm-1 px-2 mb-4 border-bottom bg-light">
            <h1>GateKeeper</h1>

            <div className="d-flex ml-lg-2">
                <ul className="nav d-flex mb-2 justify-content-center mb-md-0 gap-lg-4 gap-md-3 gap-sm-1">
                    <li><a href="home.html" className="nav-link px-2 link-secondary">Home</a></li>
                    <li><a href="../logbook/logbook.html" className="nav-link px-2 link-dark">LogBook</a></li>
                </ul>
            </div>

            <div className="d-flex justify-content-center text-end">
                <a href="../login/login.html" className="btn btn-outline-primary me-2">Login</a>
                <a href="../signup/signup.html" className="btn btn-primary">Sign-up</a>
            </div>
        </header>
        <main
            className="container d-flex flex-column flex-wrap flex-grow-1 align-items-center justify-content-center px-5">
            App components will go here
        </main>

        <footer
            className="custom-footer d-flex flex-wrap justify-content-between px-lg-5 align-items-center py-3 px-3 my-4 border-top">
            <div className="d-flex align-items-center">
                <h4 className="mb-3 mb-md-0 text-body-secondary">Maximiliano Paris | BYU CS 260 </h4>
            </div>

            <div className="d-flex align-items-center">
                <a href="https://github.com/maxiparis/cs260-gatekeeper">
                    <button type="button" className="btn btn-lg btn-outline-primary">
                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"*/}
                        {/*     className="bi bi-github" viewBox="0 0 16 16" data-darkreader-inline-fill=""*/}
                        {/*     style="--darkreader-inline-fill: currentColor;">*/}
                        {/*    <path*/}
                        {/*        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>*/}
                        {/*</svg>*/}
                        GitHub Repo
                    </button>
                </a>
            </div>
        </footer>
</div>
)
    ;
}
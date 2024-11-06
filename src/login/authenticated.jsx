import React from "react";

export default function Authenticated({ username }) {
    return (
        <div>
            <h1>Welcome, {username}</h1>
        </div>
    );
}
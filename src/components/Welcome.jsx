import React from 'react';
import '../style/Welcome.css';

export default function Welcome({ carrentUser }) {
    if (!carrentUser) {
        return <h2>לא נבחר משתמש. חזור לדף ההרשמה.</h2>;
    }

    return (
        <div className="welcome-container">
            <h1>Welcome, {carrentUser.userName}</h1>
            <div className="card">
                <p><strong>Email:</strong> {carrentUser.email}</p>
                <p><strong>Password:</strong> {carrentUser.password}</p>
                <p><strong>Username:</strong> {carrentUser.userName}</p>
            </div>
        </div>
    );
}

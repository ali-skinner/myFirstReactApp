import React, { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    return (
        <>
            <form>
                <div className="login-Container">
                    <h2 className="login-Header">Sign In</h2>
                    <div className="login-Input">
                        <label htmlFor="username">Username</label>
                        <input value={username} type="text" placeholder="username" name="username" id="username" />
                    </div>
                    <div className="login-Input"> Password </div>
                        <input value={password} type="text" placeholder="password" name="password" id="password" />
                    <div className="login-Input"> Register </div>
                </div>
            </form>
            <div className="login-Button-Container">
                <button className="button-login">Log In</button>
                <button className="button-login">Create Username</button>
            </div>

        </>

    );
};

export default LoginPage;
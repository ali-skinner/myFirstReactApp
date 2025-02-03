import React from "react";

function LoginPage () {

    return(
        <>
        <div className="login-Container">
            <h2 className="login-Header">Sign In</h2>
            <div className="login-Input"> Username </div>
            <div className="login-Input"> Password </div>
            <div className="login-Input"> Register </div>
        </div>

        <div className="login-Button-Container">
            <button className="button-login">Login In</button>
            <button className="button-login">Create Username</button>
        </div>
        </>

    );
};

export default LoginPage;
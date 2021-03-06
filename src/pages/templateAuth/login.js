import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./userContext";

import Axios from "axios";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const { setUserData } = useContext(UserContext);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };

            const loginRes = await Axios.post(
                "http://localhost:5000/users/login",
                loginUser
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (
        <div className="page">
            <h2>Log in</h2>
       
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="login-email">Email</label>
                <input
                    id="login-email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="login-password">Password</label>
                <input
                    id="login-password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
}
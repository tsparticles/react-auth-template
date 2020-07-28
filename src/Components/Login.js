import React from 'react';
import particlesConfig from "../particles.json";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Particles options={particlesConfig} id="tsparticles"/>
            <main className="box">
                <h2>Login</h2>
                <form>
                    <div className="inputBox">
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" placeholder="type your username" required/>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" name="userPassword" id="userPassword" placeholder="type your password"
                               required/>
                    </div>
                    <div>
                        <button type="submit" name="" style={{ float: "left" }}>Submit</button>
                        <Link className="button" to="/register" style={{ float: "left" }}>Register</Link>
                    </div>
                </form>
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Login;
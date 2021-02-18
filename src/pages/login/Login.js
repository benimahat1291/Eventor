import React from "react";
import Particles from "react-particles-js"
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div >
                <div className="login__container">
                <div className="login__card">
                    <h1 className="login__title">EVENT0R</h1>
                    <h2 className>Organize Your Next Event</h2>
                    <button onClick={() => loginWithRedirect()} className="loginBtn">Log-in / Sign-up</button>
                </div>
                </div>
                <Particles id="particles-js"
                    params={{
                        "particles": {
                            "number": {
                                "value": 200
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "detect_on": "window",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                ></Particles>

            </div>
        )
    )
};

export default Login;
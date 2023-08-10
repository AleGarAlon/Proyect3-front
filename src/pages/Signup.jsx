import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "./Signup.css";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const nav = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/auth/signup`, {
                email,
                password,
                username,
            });
            console.log("here is the signup response", res);
            nav("/login");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="signup-container">
            <div className="signup-content">
                <div className="signup-intro">
                    <h1> Sign up</h1>
                    <p>
                        Purrfect Pawtners opens the door to a world of fluffy
                        tails, soft paws, and heart-melting gazes.
                    </p>
                    <h5>Let's find your purrfect match together!</h5>
                </div>
                <form onSubmit={handleSignup}>
                    <label className="input-box">
                        Username
                        <input
                            type="text"
                            value={username}
                            required
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                    </label>
                    <label className="input-box">
                        Email
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </label>
                    <label className="input-box">
                        Password
                        <input
                            type="password"
                            value={password}
                            required
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </label>
                    <button type="submit" className="signup-btn">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;

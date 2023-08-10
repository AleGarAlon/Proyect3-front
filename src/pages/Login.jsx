import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { API_URL } from "../config/config.index";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    //this is how we grab things from the context
    const { authenticateUser } = useContext(AuthContext);
    const nav = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${API_URL}/auth/login`, {
                email,
                password,
            });
            console.log("here is the Login response", data);
            localStorage.setItem("authToken", data.token);
            //Make sure you await the authenticate User as it takes time and you cant access the private route until its finished
            await authenticateUser();
            nav("/profile");
        } catch (err) {
            console.log(err);
            setErrorMessage(err.response.data.errorMessage);
        }
    };
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-intro">
                    <h1>Log in</h1>
                    <p>
                        {" "}
                        We're excited to have you become a part of our community!
                    </p>
                    <h5>
                        Are you ready to embark on a heartwarming journey of
                        finding your new feline family member?
                    </h5>
                </div>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
                {errorMessage ? <p>{errorMessage}</p> : null}
            </div>
        </div>
    );
}

export default Login;

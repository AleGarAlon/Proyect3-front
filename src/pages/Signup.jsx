import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const nav = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5005/auth/signup", {
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
    <div>
      <h2>Sign Up Page</h2>
      <form onSubmit={handleSignup}>
        <label>
          username:
          <input
            type="text"
            value={username}
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
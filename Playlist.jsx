import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {

    axios.post("http://localhost:5000/api/auth/login", {
      email,
      password
    })
    .then(res => {
      alert("Login Success");
      console.log(res.data);
    })
    .catch(err => {
      alert("Login Failed");
    });

  };

  return (

    <div>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={loginUser}>
        Login
      </button>

    </div>

  );

}

export default Login;
import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Header } from "../../components/Header";

import "../../styles/home.scss";
import "../../styles/loginForm.scss"

export const Login: React.FC = () => {
  const { signed, Login } = useAuth();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  console.log(signed);

  async function handleLogin(e: any) {
    e.preventDefault();
    
    await Login({
      email,
      password
    });
  }
  console.log(Login);

  return (
    <div className="container">
      <Header />
      <main>
        <form className="loginForm" onSubmit={handleLogin}>
          <h2>Login</h2>
          <label htmlFor="email">Insira o email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              required
            />
          <label htmlFor="password">Insira a senha:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
          
          <button type="submit" className="logButton">Login</button>
        </form>
      </main>
    </div>
  );
};
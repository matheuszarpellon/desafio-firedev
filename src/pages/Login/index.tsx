import React from "react";
import { useAuth } from "../../contexts/auth";
import { Header } from "../../components/Header";

import "../../styles/home.scss";

export const Login: React.FC = () => {
  const { signed, Login } = useAuth();

  console.log(signed);

  async function handleLogin() {
    await Login({
      email: "guilherme@firedev.com.br",
      password: "q7a4z1x2",
    });
  }
  console.log(Login);

  return (
    <div className="container">
      <Header />
      <main>
        <button className="logButton" onClick={handleLogin}>
          Login
        </button>
      </main>
    </div>
  );
};

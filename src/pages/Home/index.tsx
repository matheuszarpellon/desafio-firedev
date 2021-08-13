import React from "react";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/auth";
import { useListaServicos } from "../../contexts/listaServicos";
import { Modal1 } from "../../components/Modal";
import { ButtonServicos } from "../../components/Map";

import "../../styles/home.scss";

export const Home: React.FC = () => {
  const { signed, Logout } = useAuth();
  const listaServicos = useListaServicos();

  console.log(listaServicos);
  console.log(signed);

  function handleLogout() {
    Logout();
    window.location.reload();
  }

  return (
    <div className="container">
      <Header />
      <main>
        <div className="div-log">
          <button className="logButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <section className="servicos">
          <div className="cards grid">
            {listaServicos.map((servico) => {
              return <Modal1 servico={servico} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

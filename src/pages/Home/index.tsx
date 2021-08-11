import React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from '../../components/Header'
import { useAuth } from '../../contexts/auth'
import { useListaServicos } from '../../contexts/listaServicos'

import "../../styles/home.scss";

export const Home: React.FC = () => {
  const { signed, Logout } = useAuth()
  const  listaServicos = useListaServicos()
  
  console.log(listaServicos)
  
  function handleLogout() {
    Logout()
  }

  
  return (
    <div className="container">

      <Header />
      <main>
      <button onClick={handleLogout}>Logout</button>
        <section className="servicos">
          <div className="cards grid">
            <button className="card">
              <img src="/categorias.png" alt="categorias" />
              <h3 className="title">Categorias</h3>
            </button>
            <div className="card">
                <img src="/chat.png" alt="chat" />
                <h3 className="title">Chat</h3>
            </div>
            <div className="card">
                <img src="/deal.png" alt="deal" />
                <h3 className="title">Deal</h3>
            </div>
            <div className="card">
                <img src="/lista.png" alt="lista" />
                <h3 className="title">Lista</h3>
            </div>
            <div className="card">
                <img src="/orcamentos.png" alt="orcamento" />
                <h3 className="title">Orçamento</h3>
            </div>
            <div className="card">
                <img src="/star.png" alt="star" />
                <h3 className="title">Star</h3>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
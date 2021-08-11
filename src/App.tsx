import React from "react";
import { Routes } from "./routes";
import { AuthProvider } from "./contexts/auth";
import { ListaServicosProvider } from "./contexts/listaServicos";
import { BuscaServicosProvider } from "./contexts/buscaServicos";

import "./styles/global.scss";

function App() {
  return (
    <AuthProvider>
      <ListaServicosProvider>
        <BuscaServicosProvider>
          <Routes />
        </BuscaServicosProvider>
      </ListaServicosProvider>
    </AuthProvider>
  );
}

export default App;

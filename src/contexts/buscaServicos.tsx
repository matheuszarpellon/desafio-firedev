import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";

interface BuscaServicosData {
    id: number;
    nome: string;
    descricao: string | null;
    servico_id: number | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    perguntas: [
        {
            id: number;
            conteudo: string;
            servico_id: number;
            input: string;
            escolhas: [string];
            ordem: number;
            created_at: string;
            updated_at: string;
            deleted_at: string | null;
        }
    ];
}

const BuscaServicosContext = createContext<BuscaServicosData[]>([]);

export const BuscaServicosProvider: React.FC = ({ children }) => {

    const [buscaServicos, setBuscaServicos] = useState<BuscaServicosData[]>([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.get(process.env.REACT_APP_BASEURL+"/servicos/6");
            setBuscaServicos(response.data);
            console.log(response.data)
        }
        fetchData();
    }, []);
    return (
        <BuscaServicosContext.Provider value={buscaServicos}>
            {children}
        </BuscaServicosContext.Provider>
    )
}

export function useBuscaServicos(id: number) {
    return useContext(BuscaServicosContext);
}
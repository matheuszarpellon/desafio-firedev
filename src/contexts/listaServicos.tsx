import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";

interface ListaServicosData {
    id: number;
    nome: string;
    descricao: string | null;
    servico_id: number | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    sub_servicos: [
        {
            id: number;
            nome: string;
            descricao: string | null;
            servico_id: number | null;
            created_at: string;
            updated_at: string;
            deleted_at: string | null;
        }
    ];
}

const ListaServicosContext = createContext<ListaServicosData[]>([]);

export const ListaServicosProvider: React.FC = ({children}) => {

const [listaServicos, setListaServicos] = useState<ListaServicosData[]>([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.get(process.env.REACT_APP_BASEURL+"/servicos");
            setListaServicos(response.data);
        }
        fetchData();
    }, []);

return (
    <ListaServicosContext.Provider value={listaServicos}>{children}</ListaServicosContext.Provider>
    )
}

export function useListaServicos() {
    return useContext(ListaServicosContext);
}

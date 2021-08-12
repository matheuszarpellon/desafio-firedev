import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: string | null;
  Login(user: object): Promise<void>;
  Logout(): void;
}

interface userDataProps {
  email: string;
  senha: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem("@App:user");
    const storagedToken = sessionStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(storagedUser);
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: userDataProps) {
    const response = await api.post(
      process.env.REACT_APP_BASEURL + "/auth/login",
      userData
    );

    console.log(userData);

    setUser(userData.email);
    api.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;

    sessionStorage.setItem("@App:user", userData.email);
    sessionStorage.setItem("@App:token", response.data.access_token);

    console.log(response.data.user, response.data.access_token);
  }

  function Logout() {
    sessionStorage.removeItem("@App:user");
    sessionStorage.removeItem("@App:token");
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [logado, setLogado] = useState(false);

    function FazerLogin() {
        setLogado(true);
    }

    return (
        <AuthContext.Provider value={{ ativo: !!logado, FazerLogin }}>
            {children}
        </AuthContext.Provider>
    )


}
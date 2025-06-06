import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    const getProfile = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/me", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok){
                throw new Error("no se pudo obtener el perfil");
            }
            const data = await res.json();
            setEmail(data.email);
            return data;
        } catch (error) {
            console.error("Error al obtener el perfil:", error);
            return null;
        }
    }


    const login = async (emailInput, password) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email: emailInput, password}),
            });
            if (!res.ok) {
                throw new Error("Login fallido");
            }
            const data = await res.json();
            setToken(data.token);
            setEmail(data.email);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };


    const register = async (emailInput, password) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email: emailInput, password}),
            });

            const data = await res.json();            
            if (!res.ok) {
                console.error("Respuesta backend:", data); 
                throw new Error("Registro fallido");
            }

            setToken(data.token);
            setEmail(data.email);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };



    const logout = () => {
        setToken(null);
        setEmail(null);
    };

    return (
        <UserContext.Provider value={{token, email, login, register, logout, getProfile}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
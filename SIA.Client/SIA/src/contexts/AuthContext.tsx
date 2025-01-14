import React, { createContext, useState, ReactNode, useEffect } from "react";
import { setAuthToken } from "../services/apiService";

export interface AuthContextProps {
    isAuthenticated: boolean;
    token: string | null;
    userType: string | null;
    userName: string | null;
    login: (token: string, name: string, type: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        return storedAuth === "true";
    });
    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem("token");
    });
    const [userName, setUserName] = useState<string | null>(() => {
        return localStorage.getItem("userName");
    });
    const [userType, setUserType] = useState<string | null>(() => {
        return localStorage.getItem("userType");
    });

    useEffect(() => {
        setAuthToken(token);
    }, [token]);

    const login = (token: string, name: string, type: string) => {
        setIsAuthenticated(true);
        setToken(token);
        setUserName(name);
        setUserType(type);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", token);
        localStorage.setItem("userName", name);
        localStorage.setItem("userType", type);
        setAuthToken(token);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setToken(null);
        setUserName(null);
        setUserType(null);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userType");
        setAuthToken(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, userName, userType, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
import React, { createContext, useState, ReactNode } from "react";

export interface AuthContextProps {
    isAuthenticated: boolean;
    userId: number | null;
    userType: string | null;
    login: (id: number, type: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        return storedAuth === "true";
    });
    const [userId, setUserId] = useState<number | null>(() => {
        const storedUserId = localStorage.getItem("userId");
        return storedUserId ? parseInt(storedUserId, 10) : null;
    });
    const [userName, setUserName] = useState<string | null>(() => {
        return localStorage.getItem("userName");
    });
    const [userType, setUserType] = useState<string | null>(() => {
        return localStorage.getItem("userType");
    });

    const login = (id: number, name: string, type: string) => {
        setIsAuthenticated(true);
        setUserId(id);
        setUserName(name);
        setUserType(type);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userId", id.toString());
        localStorage.setItem("userName", name);
        localStorage.setItem("userType", type);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserId(null);
        setUserName(null);
        setUserType(null);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userType");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userId, userName, userType, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
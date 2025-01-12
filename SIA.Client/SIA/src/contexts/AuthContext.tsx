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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState<number | null>(null);
    const [userType, setUserType] = useState<string | null>(null);

    const login = (id: number, type: string) => {
        setIsAuthenticated(true);
        setUserId(id);
        setUserType(type);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserId(null);
        setUserType(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userId, userType, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
import React, {ReactNode} from "react";
import {AuthProvider} from "../AuthContext";
import {InternshipProvider} from "../InternshipContext/InternshipContext";

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <AuthProvider>
            <InternshipProvider>{children}</InternshipProvider>
        </AuthProvider>
    );
};

export default AppProvider;
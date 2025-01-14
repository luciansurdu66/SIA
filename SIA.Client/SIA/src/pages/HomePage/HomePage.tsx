import React, { useState, useEffect  } from "react";
import "../../index.scss";
import GuestHeader from "../../components/organisms/GuestHeader/GuestHeader";
import SIAWelcome from "../../components/molecules/SIAWelcome/SIAWelcome";
import { useAuth } from "../../hooks/useAuth";

import apiClient from "../../services/apiService";


const HomePage: React.FC = () => {
    
    const { userType } = useAuth();
    
    
    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden">
            <GuestHeader />
            <div className="flex flex-grow overflow-hidden">
                <div className="px-0 flex justify-center items-center h-full w-full overflow-auto">
                    <SIAWelcome />
                    
                </div>
            </div>

            
        </div>
    );
};

export default HomePage;

import React from "react";
import "../../index.scss";
import GuestHeader from "../../components/organisms/GuestHeader/GuestHeader";
import SIAWelcome from "../../components/molecules/SIAWelcome/SIAWelcome";
const HomePage: React.FC = () => {
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

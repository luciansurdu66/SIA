import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { routesNames } from "../../../routes/routes";

interface GuestNavbarProps {}

const GuestNavbar: React.FC<GuestNavbarProps> = () => {
    const { isAuthenticated, userId, userName, logout } = useAuth();
    const handleLogout = () => {
        logout();
    }

    return (
        <div className="sticky top-0 z-50 flex justify-between items-center border-b border-border_color bg-background px-8 py-4">
            <Link to={routesNames.home} className="text-2xl font-bold px-4">
                SIA
            </Link>
            <div className="flex items-center px-4">
                {isAuthenticated && <div className="mr-4 px-2">Welcome, {userName}</div>}
                <Link to={routesNames.home} className="mr-4 px-2">
                    Home
                </Link>
                {isAuthenticated ? (
                    <>
                        
                        <Link to={`${routesNames.profile.replace(":id", userId?.toString() || "")}`}>
                            <div className="mr-4 px-2">Profile</div>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="rounded-md bg-primary text-primary_text_color px-4 py-2"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to={routesNames.login}>
                        <button className="rounded-md bg-primary text-primary_text_color px-4 py-2">
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default GuestNavbar;

import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import React from "react";
import { AuthProvider } from "./contexts/AuthContext";

(async () => {
    try {
        const root = ReactDOM.createRoot(
            document.getElementById("app") as HTMLElement
        );
        root.render(
            <AuthProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthProvider>
        );
    } catch (error) {
        console.error(
            "Failed to load configuration and start the application:",
            error
        );
    }
})();

import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import React from "react";
import AppProvider from "./contexts/CompositeProvider/CompositeProvider";

(async () => {
    try {
        const root = ReactDOM.createRoot(
            document.getElementById("app") as HTMLElement
        );
        root.render(
            <AppProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AppProvider>
        );
    } catch (error) {
        console.error(
            "Failed to load configuration and start the application:",
            error
        );
    }
})();

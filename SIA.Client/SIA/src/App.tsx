import React from "react";
import "./index.scss";
import AppRoutes from "./AppRoutes";
import { NextUIProvider } from "@nextui-org/react";

const App = () => {
    return (
        <div className="lg:h-screen lg:max-h-screen border-b border-border_color bg-background_secondary text-primary_text_color">
            <NextUIProvider>
                <AppRoutes />
            </NextUIProvider>
        </div>
    );
};

export default App;

import React from "react";
import App from "./App";

export default function RenderPage(root){
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}


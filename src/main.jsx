import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarModeProvider } from "./DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarModeProvider>
      <App />
    </DarModeProvider>
  </React.StrictMode>
);

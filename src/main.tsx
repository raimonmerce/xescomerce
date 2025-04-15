import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import "./index.css";
import App from "./App.tsx";
import { Analytics } from './Analytics.tsx';
import "./i18n/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Analytics />
      <App />
    </HelmetProvider>
  </StrictMode>
);
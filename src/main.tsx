import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";
import { Analytics } from './Analytics.tsx';
import "./i18n/i18n";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <HelmetProvider>
        <Analytics />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
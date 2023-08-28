import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./components/styled";
import CatContextProvider from "./context/CatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CatContextProvider>
      <GlobalStyle />
      <App />
    </CatContextProvider>
  </React.StrictMode>
);

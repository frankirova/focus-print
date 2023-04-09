import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./styles/__main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MyNewTheme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider theme={MyNewTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);

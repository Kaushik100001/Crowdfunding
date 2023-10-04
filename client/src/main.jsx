import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./context";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="goerli" clientId="4a66d42acd31a5d07eb2d58f3c00c90d"
    >
      <BrowserRouter>
      <StateContextProvider>
      <App />
      </StateContextProvider>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
  
);

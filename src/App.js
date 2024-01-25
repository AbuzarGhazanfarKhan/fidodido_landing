import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import React, { useEffect } from "react";
import "./App.css";
import { Router } from "./Router";
import { useLocation } from 'react-router-dom';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet,sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {jsonRpcProvider} from "wagmi/providers/jsonRpc"

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [
    alchemyProvider({ apiKey: "HRgjxWnQOiW-LBzh16pivmZkFaeeU_kl" }),
    jsonRpcProvider({ rpc: () => ({ http: "https://eth-sepolia.g.alchemy.com/v2/HRgjxWnQOiW-LBzh16pivmZkFaeeU_kl" }) }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: "2023229a94f9f1657e8a8d86625c292d",
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = ''; // Reset to default color
    }

    return () => {
      document.body.style.backgroundColor = ''; // Reset to default color
    };
  }, [location]);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Router />
    </RainbowKitProvider>
    </WagmiConfig>

  );
}

export default App;

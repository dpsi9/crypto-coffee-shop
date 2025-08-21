"use client"

import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import {  clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { FC, ReactNode, useMemo } from "react";
require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletContext: FC<{children: ReactNode}> = ({children}) => {
    const network =  "devnet";
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

     return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
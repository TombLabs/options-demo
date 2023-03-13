import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";

const Nav = () => {
  return (
    <div className="absolute top-0 w-full h-36 flex justify-end items-center px-8 border-2 border-neutral-500/50">
      <img src="/tensor.png" alt="Hypertomb" className="w-32 mr-auto" />
      <WalletMultiButton />
    </div>
  );
};

export default Nav;

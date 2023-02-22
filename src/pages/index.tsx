import axios from "axios";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Nft from "../components/Nft";
import styles from "../styles/Home.module.css";

const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletDisconnectButton,
  { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

type TombStonedHashlist = {
  mint: string;
  isResurrected: boolean;
  current?: string;
  original?: string;
  mutated?: string;
  resurrected?: string;
};

const Home: NextPage = () => {
  const [hashlist, setHashlist] = useState<TombStonedHashlist[]>();

  console.log(hashlist);
  const getHashlist = useCallback(async () => {
    const { data } = await axios.get(
      "https://shdw-drive.genesysgo.net/J4b3YTpZwRrbus3TMrAHb7FATfQgfdg4UoL9v7tEGk5T/hashlist.json"
    );
    setHashlist(data);
  }, []);

  useEffect(() => {
    getHashlist();
  }, []);

  return (
    <main className="min-h-screen w-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="px-60 py-48 flex items-end justify-start gap-4 ">
        {hashlist?.map((nft, i) => (
          <Nft nft={nft} key={i} />
        ))}
      </div>
    </main>
  );
};

export default Home;

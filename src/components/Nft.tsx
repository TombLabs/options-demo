import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { EffectFlip, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { getResurrectedData, getUnresurrectedData } from "../utils/helpers";
import Swipe from "./Swipe";

type TombStonedHashlist = {
  mint: string;
  isResurrected: boolean;
  current?: string;
  original?: string;
  mutated?: string;
  resurrected?: string;
};

type NftProps = {
  nft: TombStonedHashlist;
};
const Nft = ({ nft }: NftProps) => {
  const [metadata, setMetadata] = useState<any[]>();

  const fetchMetadata = async () => {
    if (nft.isResurrected) {
      const data = await getResurrectedData([
        nft.original!,
        nft.mutated!,
        nft.resurrected!,
      ]);

      setMetadata(data);
    } else {
      const data = await getUnresurrectedData(nft.current!);
      setMetadata(data);
    }
  };
  console.log("here", metadata);
  useEffect(() => {
    fetchMetadata();
  }, [nft]);

  return (
    <div className="relative flex flex-col items-start justify-start w-60 h-96 border-2 border-neutral-500/50 bg-neutral-600/50 rounded-xl gap-2">
      <Swipe metadata={metadata!} nft={nft} />
      <div className="p-2 w-full flex items-start justify-start">
        <div className="p-2 flex items-start justify-start gap-1 text-white rounded-xl bg-black">
          #{metadata?.[0].name.split("#")[1]}
        </div>
        <p className="ml-auto p-2 flex items-start justify-start gap-1 text-white rounded-xl bg-black">
          Price: 2500 SOL
        </p>
      </div>
      <button className="btn mb-2 w-full mx-auto">Buy</button>
    </div>
  );
};
export default Nft;

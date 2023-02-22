import React from "react";
import { EffectFlip, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

type SwipeProps = {
  metadata: any[];
  nft: TombStonedHashlist;
};

type TombStonedHashlist = {
  mint: string;
  isResurrected: boolean;
  current?: string;
  original?: string;
  mutated?: string;
  resurrected?: string;
};

const Swipe = ({ metadata, nft }: SwipeProps) => {
  console.log(metadata);
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={true}
      navigation={true}
      modules={[EffectFlip, Pagination, Navigation]}
      className="h-3/4 w-full"
    >
      {!nft.isResurrected ? (
        <SwiperSlide>
          <img
            src={metadata?.[0].image}
            alt={metadata?.[0].name}
            className="h-full w-full border-2 border-neutral-500/50"
          />
        </SwiperSlide>
      ) : (
        <>
          <SwiperSlide className="relative h-full w-full">
            <div className="absolute top-0 left-0 w-full p-2 flex justify-center items-center rounded-lg bg-purple-500/50 text-white text-sm z-10">
              Resurrected
            </div>
            <img
              src={metadata?.[2].image}
              alt={metadata?.[2].name}
              className="h-full w-full border-2 border-neutral-500/50"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute top-0 left-0 w-full p-2 flex justify-center items-center rounded-lg bg-red-900/70 text-white text-sm z-10">
              Mutated
            </div>
            <img
              src={metadata?.[1].image}
              alt={metadata?.[1].name}
              className="h-full w-full border-2 border-neutral-500/50"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute top-0 left-0 w-full p-2 flex justify-center items-center rounded-lg bg-blue-500/50 text-white text-sm z-10">
              Original
            </div>
            <img
              src={metadata?.[0].image}
              alt={metadata?.[0].name}
              className="h-full w-full border-2 border-neutral-500/50"
            />
          </SwiperSlide>
        </>
      )}
    </Swiper>
  );
};

export default Swipe;

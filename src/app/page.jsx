import Card from "@/components/card/Card";
import ImageGallery from "@/components/image-click/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/components/photos/Photos";
import BannerCont from "@/components/banner/BannerCont";
import BannerHome from "@/components/banner/BannerHome";

export default function Home() {
  const pdfUrl = 'https://www.dropbox.com/scl/fi/2uuforjhtzqiqo0nkd385/BBC_Gardeners_World_Happy_House_Plants_2024_freemagazines_top_Comprimir-por-lotes.pdf?rlkey=tngr137moz52xtpul7yrk5s7j&st=gd450d3q&raw=1';

  return (
    <div className="bg-[#20201E] flex flex-col justify-center pt-10 w-full h-full">
      <div className="flex justify-center">
        <BannerHome />
        
      </div>

      <div>
        <ImageGallery
          images={images}
          
        />
      </div>

    </div>
  );
}

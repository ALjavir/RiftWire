
import { useEffect, useState } from "react";
import { getNewsData } from "../service/myJasonData";
import HomeHeroSection from "~/components/pages/home/hero-section";
import { ButtonLarge } from "~/components/common/button";
import NewsSec from "~/components/pages/news/news-section";
import ContractSec from "~/components/pages/contract/contract-section";

export default function Home() {
  const [heroData, setHeroData] = useState<any[]>([]);
  const [newsData, setNewsData] = useState<any[]>([])

  useEffect(() => {
    async function init() {
      try {
        const data = await getNewsData();

        setHeroData(data.slice(0, 4));
        setNewsData(data.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    }
    init();
  }, []);


  return (
    <main>
      <HomeHeroSection homeHeroIntdata={heroData} />
      <section id="home-news-sec" className="w-full max-w-10/12 mx-auto py-12">
        <div className="text-center py-20   space-y-2">
          <h1 className="font-s text-4xl sm:text-6xl font-bold text-g tracking-wider uppercase">
            LATEST NEWS & UPDATES
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto pt-2">
            Stay up to date with patch notes, tournament announcements, and community highlights.
          </p>
        </div>    <NewsSec newsDataInt={newsData}  />
      </section>
  
      <div className="w-full flex justify-center pt-10 pb-40">
        <ButtonLarge text={"Show All News 🡵"} path="/news" />
      </div>
      <div className="w-full bg-[#0b0e17] pb-20 pt-10">
        <ContractSec />
      </div>
    </main>
  )
}
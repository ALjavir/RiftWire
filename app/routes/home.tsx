
import { useEffect, useState } from "react";
import imgT from "../assets/image/testimg.jpeg";
import { getNewsData } from "../service/myJasonData";
import HomeHeroSection from "~/components/pages/home/hero-section";
import HomeNewsSec from "~/components/pages/home/news-section";
import { ButtonLarge } from "~/components/common/button/button";
import NewsSec from "~/components/pages/home/news-section";
import ContractSec from "~/components/pages/contract/contract-section";
import routes from "~/routes";

export default function Home() {
  const [heroData, setHeroData] = useState<any[]>([]);
  const [newsData, setNewsData] = useState<any[]>([])

  useEffect(() => {
    async function init() {
      try {
        const data = await getNewsData();
        setHeroData(data.slice(0, 4));
        setNewsData(data.slice(4, 10));
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    }
    init();
  }, []);


  return (
    <main>
      <HomeHeroSection homeHeroIntdata={heroData} />
      <NewsSec newsDataInt={newsData} />
      <div className="w-full flex justify-center pt-10 pb-40">
        <ButtonLarge text={"Show All News 🡵"}path="/news"/>
      </div>
      <div className="w-full bg-[#0b0e17] pb-20 pt-10">
        <ContractSec/>
      </div>
    </main>
  )
}
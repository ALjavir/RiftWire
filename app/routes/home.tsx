
import { useEffect, useState } from "react";
import imgT from "../assets/image/testimg.jpeg";
import { getNewsData } from "../service/myJasonData";
import HomeHeroSection from "~/components/pages/home/hero/hero-section";

export default function Home() {
  const [heroData, setHeroData] = useState<any[]>([]);

  useEffect(() => {
    async function init() {
      try {
        const data = await getNewsData();
        setHeroData(data.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    }
    init();
  }, []);


  return (
    <main>
      <HomeHeroSection homeHeroIntdata={heroData}/>
    </main>
)
}
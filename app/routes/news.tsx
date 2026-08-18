import { useEffect, useState } from "react";
import { getNewsData } from "../service/myJasonData";
import NewsSec from "~/components/pages/home/news-section";
export default function News() {
      const [newsData, setNewsData] = useState<any[]>([])
      useEffect(() => {
        async function init() {
          try {
            const data = await getNewsData();
    
            setNewsData(data);
          } catch (error) {
            console.error("Failed to fetch news:", error);
          }
        }
        init();
      }, []);
    
    
      return (
        <main>
        
          <NewsSec newsDataInt={newsData} />
        <div className="h-30"></div>
        </main>
      )
}
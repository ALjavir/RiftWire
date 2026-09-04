import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { getNewsData } from "../service/myJasonData";
import NewsDetailPageHero from "~/components/pages/detailsPage/news/hero";
import ContentSec from "~/components/pages/detailsPage/news/contents";


export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const data = await getNewsData();
        const found = data.find((item: any) => String(item.id) === String(id));
        setArticle(found);
      } catch (err) {
        console.error("Error fetching article:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080b13] text-white flex items-center justify-center">
        <p className="text-cyan-400 font-mono text-sm tracking-widest animate-pulse">
          FETCHING TRANSMISSION...
        </p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#080b13] text-white flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-mono text-red-500">ARTICLE NOT FOUND</h1>
        <Link to="/news" className="text-cyan-400 text-sm font-mono hover:underline">
          ← BACK TO NEWS
        </Link>
      </div>
    );
  }

  return (
      <main>
          <NewsDetailPageHero newsDetailesPageData={article} />
          <ContentSec contentsData={article.content}/>
 </main>
  );
}
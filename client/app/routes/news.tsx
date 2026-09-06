import { useEffect, useState } from "react";
import { getNewsData } from "../service/myJasonData";
import NewsSec from "~/components/pages/news/news-section";
import serchIcon from "~/assets/image/search.svg"
import { useSearchParams } from "react-router";



export default function News() {

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const urlSearchQuery = searchParams.get("search") || "";

  const [newsData, setNewsData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [inputQuery, setInputQuery] = useState(urlSearchQuery);

  const fetchNews = async (pageToFetch: number, searchString: string) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/news?page=${pageToFetch}&search=${searchString}`
      );
      const result = await res.json();
      if (result.success) {
        setNewsData(result.data);
        setTotalPages(result.totalPages);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage, urlSearchQuery);
  }, [currentPage, urlSearchQuery]);

  const handleSearch = () => {
    setSearchParams({ search: inputQuery, page: "1" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };


  const handlePrev = () => {
    if (currentPage > 1) {
      setSearchParams({ search: urlSearchQuery, page: (currentPage - 1).toString() });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ search: urlSearchQuery, page: (currentPage + 1).toString() });
    }
  };

  const handlePageClick = (pageNum: number) => {
    setSearchParams({ search: urlSearchQuery, page: pageNum.toString() });
  };

  return (
    <main>
      <section id="newsPage-sec" className="w-full max-w-10/12 mx-auto py-12">
        <div className="text-center py-20 space-y-2">
          <h1 className="font-s text-4xl sm:text-6xl font-bold text-g tracking-wider uppercase">
            LATEST NEWS & UPDATES
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto pt-2">
            Stay up to date with patch notes, tournament announcements, and community highlights.
          </p>
        </div>


        <div className="flex items-center w-full justify-center mb-15">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search news..."
            className="w-full max-w-2xl bg-[#0a1120] p-2.5 text-white placeholder-gray-400 outline-none border border-r-0 border-slate-700 focus:border-white"
          />
          <button
            onClick={handleSearch}
            className="inline-flex w-fit cursor-pointer items-center justify-center py-2.5 px-10 border text-base lg:text-lg font-medium text-white transition-all duration-0 bg-[linear-gradient(315deg,#0bc4e2_0%,#2c8cc2_100%)] hover:brightness-110"
          >
            <img src={serchIcon} alt="Search" className="h-6 w-auto object-contain" />
          </button>
        </div>

        {/* --- DYNAMIC RESULTS COUNTER --- */}
        {urlSearchQuery !== "" && (
          <p className="text-center m-10 border-b border-slate-800 pb-4 text-gray-400 text-base sm:text-lg">
            Searching for "{urlSearchQuery}"...
          </p>
        )}

        {/* --- GRID OR ERROR RENDER --- */}
        {newsData.length > 0 ? (
          <NewsSec newsDataInt={newsData} />
        ) : (
          <h1 className="text-center text-2xl font-mono text-red-500 py-20">
            No News Found matching "{urlSearchQuery}"
          </h1>
        )}

        {/* --- PAGINATION UI --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 mb-10">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 border transition-all ${currentPage === 1
                  ? "border-slate-800 text-slate-600 cursor-not-allowed"
                  : "border-slate-700 hover:border-[#0bc4e2] text-white cursor-pointer"
                }`}
            >
              Prev
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageClick(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center border transition-all cursor-pointer ${currentPage === pageNum
                        ? "bg-[#0bc4e2] text-black border-[#0bc4e2] font-bold"
                        : "bg-[#0a1120] text-white border-slate-700 hover:border-[#0bc4e2]"
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border transition-all ${currentPage === totalPages
                  ? "border-slate-800 text-slate-600 cursor-not-allowed"
                  : "border-slate-700 hover:border-[#0bc4e2] text-white cursor-pointer"
                }`}
            >
              Next
            </button>
          </div>
        )}
      </section>

      <div className="h-30"></div>
    </main>
  );
}
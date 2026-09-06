import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { getNewsData } from "../../../../service/myJasonData";

interface newsDetailesPageHeroInt{
    newsDetailesPageData: any
}


export default function NewsDetailPageHero({newsDetailesPageData}: newsDetailesPageHeroInt) {


  return (
    <article className="min-h-screen bg-[#080b13] text-white py-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
      
      {/* Back Button */}
      <Link 
        to="/news" 
        className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 gap-2 uppercase tracking-wider transition-colors"
      >
        ← BACK TO ALL NEWS
          <h1>{newsDetailesPageData._id}</h1>
      </Link>

      {/* Header Info */}
      <div className="space-y-3 border-b border-slate-800 pb-6">

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#C8AA6E] leading-tight">
          {newsDetailesPageData.title}
        </h1>
      </div>

      {/* Cover Image */}
      <div className="w-full h-64 sm:h-96 overflow-hidden rounded-lg border border-[#C8AA6E]/40 shadow-2xl">
        <img
          src={newsDetailesPageData.thumbnail}
          alt={newsDetailesPageData.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Full Content */}
      <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
        {/* Short Summary Highlight */}
        <p className="font-semibold text-slate-200 border-l-4 border-cyan-400 pl-4 py-1 italic bg-cyan-950/20">
          {newsDetailesPageData.shortDescription}
        </p>

        {/* Full Article Content */}
        <div className="space-y-4">
        
        </div>
      </div>

    </article>
  );
}
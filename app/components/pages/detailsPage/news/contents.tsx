interface contentsInt {
    contentsData: any[]
}

export default function ContentSec({ contentsData }: contentsInt) {

 return(

<section className="space-y-8 max-w-3xl mx-auto py-4">
      {contentsData.map((item: any, index: number) => {
        
        // 1. PARAGRAPH
        if (item.type === "paragraph") {
          return (
            <p
              key={index}
              className="text-slate-300 text-base sm:text-lg leading-relaxed tracking-wide font-normal selection:bg-cyan-500/30 selection:text-cyan-200"
            >
              {item.text}
            </p>
          );
        }

        // 2. YOUTUBE EMBED
        if (item.type === "youtube") {
          return (
            <div
              key={index}
              className="my-8 w-full rounded-xl overflow-hidden bg-[#101524] border border-[#C8AA6E]/40 shadow-[0_0_25px_rgba(0,0,0,0.6)] group"
            >
              {/* Top Chrome / Broadcast Bar */}
              <div className="bg-[#080b13] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-cyan-400 font-semibold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  TRANSMISSION BROADCAST
                </span>
                <span className="text-slate-600 uppercase">MEDIA STREAM</span>
              </div>

              {/* Video Frame */}
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={item.videoId}
                  title="YouTube player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          );
        }

        // 3. IMAGE
        if (item.type === "image") {
          return (
            <figure key={index} className="my-8 space-y-2">
              <div className="relative overflow-hidden rounded-xl border border-slate-800 hover:border-[#C8AA6E]/60 transition-colors duration-300 shadow-2xl group">
                <img
                  src={item.url || item.text}
                  alt={item.caption || "Article media"}
                  className="w-full object-cover max-h-[480px] group-hover:scale-102 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
              </div>
              {item.caption && (
                <figcaption className="text-center text-xs font-mono text-slate-500 tracking-wider">
                  // {item.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        // 4. QUOTE
        if (item.type === "quote") {
          return (
            <blockquote
              key={index}
              className="my-8 relative overflow-hidden rounded-r-xl bg-gradient-to-r from-cyan-950/40 via-[#101524]/60 to-transparent p-6 sm:p-8 border-l-4 border-cyan-400 shadow-lg"
            >
              <div className="absolute top-2 right-4 text-7xl font-serif text-cyan-400/10 pointer-events-none select-none">
                “
              </div>
              <p className="font-serif text-lg sm:text-xl text-cyan-200 italic leading-snug tracking-wide relative z-10">
                "{item.text}"
              </p>
            </blockquote>
          );
        }

        return null;
      })}
    </section>
)}
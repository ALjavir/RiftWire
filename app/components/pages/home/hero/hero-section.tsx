import { useEffect, useState } from "react";
import Btn from "~/components/common/button/button"

interface HomeHeroInt {
    homeHeroIntdata: any[]
}

export default function HomeHeroSection({ homeHeroIntdata }: HomeHeroInt) {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play interval (Changes card every 5 seconds)
    useEffect(() => {
        if (!homeHeroIntdata || homeHeroIntdata.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % homeHeroIntdata.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [homeHeroIntdata]);

    if (!homeHeroIntdata || homeHeroIntdata.length === 0) return null;
    return (
        <section id="home-hero-sec" className="relative w-full h-137.5 md:h-162.5 bg-slate-950 overflow-hidden">

            {/* Slides Container */}
            {homeHeroIntdata.map((data, index) => {
                const isActive = index === currentIndex;

                return (
                    <div
                        key={data.id || index}
                        className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                            }`}
                    >
                        {/* Background Image */}
                        <img
                            src={data.imageMedia?.url || data.thumbnail}
                            alt={data.title || "Hero Banner"}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />

                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/75 to-transparent w-full md:w-3/4" />

                        {/* Hero Content */}
                        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-12 w-full">
                            <div className="max-w-xl space-y-3">

                                {/* Accent Badge */}
                                <div className="flex items-center gap-2">
                                    <span className="w-5 h-0.5 bg-cyan-400"></span>
                                    <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase">
                                        LATEST ADDITION
                                    </p>
                                </div>

                                {/* Date & Tag */}
                                <p className="text-gray-400 font-semibold tracking-wider text-xs uppercase">
                                    ESPORTS <span className="mx-1">|</span> {data.date}
                                </p>

                                {/* LoL Hextech Gold Title */}
                                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C8AA6E] leading-tight drop-shadow-md">
                                    {data.title}
                                </h1>

                                {/* Description */}
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md line-clamp-3 pt-1">
                                    {data.shortDescription}
                                </p>

                                {/* Action Button */}
                                <div className="pt-4">
                                    <a
                                        href={data.url || `#blog-${data.id}`}
                                        className="bg-[#00A3E0] hover:bg-cyan-600 text-white font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-none transition-colors duration-200 shadow-md inline-block"
                                    >
                                        READ MORE
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Page Indicators (Flutter SmoothPageIndicator style) */}
            <div className="absolute bottom-6 left-6 md:left-16 z-20 flex items-center gap-2">
                {homeHeroIntdata.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex
                            ? 'w-8 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                            : 'w-3 bg-gray-600/70 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}
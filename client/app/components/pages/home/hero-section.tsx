import { useEffect, useState } from "react";
import {ButtonLarge} from "~/components/common/button"

interface HomeHeroInt {
    homeHeroIntdata: any[]
}

export default function HomeHeroSection({ homeHeroIntdata }: HomeHeroInt) {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!homeHeroIntdata || homeHeroIntdata.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % homeHeroIntdata.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [homeHeroIntdata]);

    if (!homeHeroIntdata || homeHeroIntdata.length === 0) return null;
    return (
<section id="home-hero-sec" className="relative w-full h-160 md:h-185 lg:h-200 bg-slate-950 overflow-hidden">
    {homeHeroIntdata.map((data, index) => {
        const isActive = index === currentIndex;

        return (
            <div
                key={data.id || index}
                className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
                <img
                    src={data.thumbnail}
                    alt={data.title || "Hero Banner"}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/75 to-transparent w-full md:w-3/4" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                
               
                <div className="relative z-10 w-full h-full p-6 pb-30 md:pb-32 sm:p-10 md:p-16 lg:p-32 flex flex-col justify-end items-start">
                    <div className="max-w-5xl space-y-3 md:space-y-4">
                        
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-0.5 bg-p"></span>
                            <p className="text-p font-semibold tracking-widest text-xs md:text-sm uppercase pb-0.5">
                                LATEST ADDITION
                            </p>
                        </div>
                        
                        <p className="text-gray-400 font-semibold font-mono tracking-wider text-xs md:text-sm uppercase pb-2 md:pb-4">
                            {data.category} <span className="mx-1">|</span> {data.date}
                        </p>

                      
                        <h1 className="font-s text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-g leading-tight drop-shadow-md">
                            {data.title}
                        </h1>
                        
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl line-clamp-3 pb-6 md:pb-8">
                            {data.shortDescription}
                        </p>
                        
                        <ButtonLarge text={"READ MORE"} path={`/news/${data._id}`} />
                    </div>
                </div>
            </div>
        );
    })}

   
    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-16 z-20 flex items-center gap-2 md:gap-3">
        {homeHeroIntdata.map((_, index) => {
            const isActive = index === currentIndex;

            return (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-10 h-10 md:w-12 md:h-12 cursor-pointer font-mono rounded-full border-2 text-lg md:text-2xl font-bold flex items-center justify-center transition-all duration-300 ${
                        isActive
                            ? 'text-white bg-p border-p'
                            : 'text-gray-400 border-gray-400 hover:border-gray-300 hover:text-white'
                    }`}
                >
                    {index + 1}
                </button>
            );
        })}
    </div>
</section>
    );
}
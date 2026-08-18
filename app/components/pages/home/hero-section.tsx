import { useEffect, useState } from "react";
import {ButtonLarge} from "~/components/common/button/button"

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
        <section id="home-hero-sec" className="relative w-full h-137.5 md:h-200 bg-slate-950 overflow-hidden">
            {homeHeroIntdata.map((data, index) => {
                const isActive = index === currentIndex;

                return (
                    <div
                        key={data.id || index}
                        className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-700 ease-in-out  ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                            }`}
                    >
                        <img
                            src={data.thumbnail}
                            alt={data.title || "Hero Banner"}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/75 to-transparent w-full md:w-3/4" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                        <div className="relative z-10 w-full h-full p-40  flex flex-col justify-end items-start ">
                            <div className="max-w-5xl space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="w-5 h-0.5 bg-p"></span>
                                    <p className="text-p font-semibold tracking-widest text-sm uppercase pb-0.5">
                                        LATEST ADDITION
                                    </p>
                                </div>
                                <p className="text-gray-400 font-semibold font-mono tracking-wider text-sm uppercase pb-4">
                                    ESPORTS <span className="mx-1">|</span> {data.date}
                                </p>


                                <h1 className="font-s text-3xl  sm:text-4xl md:text-6xl font-bold text-g leading-16 drop-shadow-md">
                                    {data.title}
                                </h1>
                                <p className="text-gray-300 text-base md:text-base leading-relaxed max-w-2xl line-clamp-3 pt-0 pb-8">
                                    {data.shortDescription}
                                </p>
                                <ButtonLarge text={"READ MORE"} path={""} />

                            </div>
                        </div>
                    </div>
                );
            })}


            <div className="absolute bottom-10 right-6 md:right-16 z-20 flex items-center gap-3">
                {homeHeroIntdata.map((_, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-12 h-12 cursor-pointer font-mono rounded-full border-2 text-2xl font-bold flex items-center justify-center transition-all duration-300 ${isActive
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
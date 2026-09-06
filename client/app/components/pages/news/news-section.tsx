import { useEffect, useState } from "react";
import { ButtonSmall } from "~/components/common/button"

interface NewsInt {

    newsDataInt: any[]
}
export default function NewsSec({ newsDataInt }: NewsInt) {
    console.log("newsDataInt:", newsDataInt);



    return (
       




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsDataInt.map((data) => (

                    <article
                        key={data._id}
                        className="bg-[#0b0e17] border-2 border-gray-800 hover:border-g transition-all duration-300 flex flex-col justify-between group  shadow-white"
                    >

                        <div className="relative w-full h-48 sm:h-70 overflow-hidden bg-black">
                            <img
                                src={data.thumbnail}
                                alt={data.title || "News Thumbnail"}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            />


                            <div className="absolute inset-0 bg-linear-to-t from-[#0A0C10] via-transparent to-transparent opacity-80" />


                            <span className="absolute bottom-3 left-4 text-p text-sm font-bold tracking-widest uppercase">
                                ESPORTS
                                <h1>{data._id}</h1>
                            </span>
                        </div>

                        <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                            <div className="space-y-2">
                                <p className="text-gray-500 text-sm font-normal font-mono tracking-wider">
                                    {data.date}
                                </p>


                                <h2 className="font-s text-2xl font-semibold text-white leading-snug line-clamp-3 group-hover:text-g transition-colors">
                                    {data.title}
                                </h2>


                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                    {data.shortDescription}
                                </p>
                            </div>


                            <div className="pt-2">
                                <ButtonSmall
                                    path={`/news/${data._id}`}
                                    text="READ MORE"

                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>

     
    )
}
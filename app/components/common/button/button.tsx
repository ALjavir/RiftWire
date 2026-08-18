interface buttonLargeInt {
    text: string
    path: any

    
}

export  function ButtonLarge({ text, path, }: buttonLargeInt) {
    return (
    <a
    href={path}
    className="inline-flex w-fit cursor-pointer items-center px-8 py-3 text-lg font-medium text-white uppercase tracking-widest transition-all duration-0  bg-[linear-gradient(315deg,#0bc4e2_0%,#2c8cc2_100%)] hover:bg-none hover:bg-p"
    style={{
        borderRadius: text === "Sign Up" ? "0px" : "5px",
        clipPath: text === "Sign Up" ? "polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)" : undefined
    }}
>
    {text}
</a>
    )
}

interface buttonSmallInt {
    text: string
    path: any

    
}

export  function ButtonSmall({ text, path, }: buttonSmallInt) {
    return (
        <a
            href={path}
           className="inline-flex w-fit cursor-pointer items-center  px-4 rounded py-1.5 text-base font-normal text-white uppercase  transition-all duration-0  bg-[linear-gradient(315deg,#0bc4e2_0%,#2c8cc2_80%)] hover:bg-none hover:bg-p"
      
        >
            {text}
        </a>
    )
}
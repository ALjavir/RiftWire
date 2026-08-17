interface buttonInt {
    text: string
    path: any
}

export default function Btn({ text, path }: buttonInt) {
    return (
        <a
            href={path}
            className="flex items-center bg-p px-8 py-3 text-sm font-black uppercase tracking-widest text-black transition-all duration-200 hover:bg-white hover:text-black active:scale-95 shadow-[0_0_20px_rgba(252,238,10,0.4)]"
            style={{
                clipPath: text == "Sign Up"? "polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)": undefined
            }}
        >
            {text}
        </a>
    )
}
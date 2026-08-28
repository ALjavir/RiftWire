import { NavLink } from "react-router";
import logoImg from "~/assets/image/logo.png"
import fbIcon from "~/assets/image/fb.svg"
import instIcon from "~/assets/image/inst.svg"
import xIcon from "~/assets/image/x.svg"

export default function Footer() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "News", path: "/news" },
        { name: "Contact", path: "/contract" },
    ];

    const socItems = [
        { img: fbIcon, path: "/" },
        { img: instIcon, path: "/" },
        { img: xIcon, path: "/" },
    ];
    return (
        <footer id="footer" className="w-full bg-[#080b13] border-t border-slate-800/80 py-12 px-4 flex flex-col items-center text-center space-y-8">

            {/* Top Part: Logo & Subtext */}
            <div className="flex flex-col items-center max-w-xl">
              <img
                className="h-30 w-auto object-contain "
                src={logoImg}
                alt="RiftWire"
            />
                <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-lg">
                    RiftWire — Esports news, stories, and insights for the competitive gaming world.
                </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                    className={({ isActive }) =>
                                `px-1 py-1 font-p text-base font-bold uppercase tracking-widest transition-all duration-150 ${isActive
                                    ? "text-p"
                                    : "text-white hover:text-p"
                                }`
                            }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            {/* Social Media Icons */}
            <nav className="flex items-center justify-center gap-4">
                {socItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full px-2  flex items-center justify-center text-slate-400   hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                        <img
                            src={item.img}
                            alt="Social Icon"
                            className="w-15 h-15 object-contain transition-opacity"
                        />
                    </a>
                ))}
            </nav>

            {/* Divider & Copyright */}
            <div className="w-full max-w-2xl border-t border-slate-800/80 pt-6">
                <p className="text-slate-500 text-xs font-mono tracking-wider">
                    © 2026 Rift Wire. All rights reserved.
                </p>
            </div>

        </footer>
    )
}
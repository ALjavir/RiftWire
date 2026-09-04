import React, { useState } from 'react';

import logoImg from "~/assets/image/logo.png"

import { NavLink } from 'react-router/internal/react-server-client';
import { ButtonLarge, ButtonSmall } from './button';



export default function TopNavBar() {
const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: "Home", path: "/" },
        { name: "News", path: "/news" },
        { name: "Contact", path: "/contract" },
    ];

    return (
      <header id="top-nav-bar" className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-4 bg-linear-to-b from-black/80 to-transparent">

            <img
                className="h-20 lg:h-30 w-auto object-contain "
                src={logoImg}
                alt="RiftWire"
            />

            <div className="hidden md:flex items-stretch">
                <nav
                    className="flex items-center gap-2 bg-bg border-y border-l-2 border-p px-6 py-2"
                    style={{ clipPath: "polygon(0px 0, 100% 0, 100% 100%, 0px 100%)" }}
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `px-2 md:px-4 py-1 font-p text-sm lg:text-base font-bold uppercase tracking-widest transition-all duration-150 ${isActive
                                    ? "text-p"
                                    : "text-white hover:text-p"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
                <ButtonLarge text={'Sign Up'} path={"#"} />
            </div>

          
            <button
                className="flex md:hidden text-white hover:text-p focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>

          
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 p-6 flex flex-col gap-4 md:hidden border-b border-p">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `font-p text-base font-bold uppercase tracking-widest py-2 ${isActive ? "text-p" : "text-white"}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                
                    <div className='flex justify-center w-full'>
                        <ButtonSmall text={'Sign Up'} path={"#"} /> 
                </div>
                       
                 
                </div>
            )}

        </header>
    );
}
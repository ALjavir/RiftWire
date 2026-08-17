import React, { useState } from 'react';

import logoImg from "~/assets/image/logo.png"

import { NavLink } from 'react-router/internal/react-server-client';
import Btn from '../button/button';



export default function TopNavBar() {

    const navItems = [
        { name: "Home", path: "/" },
        { name: "News", path: "/news" },
        { name: "Contacts", path: "/contacts" },
    ];

    return (
        <header id="top-nav-bar" className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-4 bg-gradient-to-b from-black/80 to-transparent">
        
            <img
                className="h-30 w-auto object-contain "
                src={logoImg}
                alt="RiftWire"
            />

            <div className="flex items-stretch">
               
                <nav
                    className="flex items-center gap-2 bg-bg border-y-2 border-l-2 border-p px-6 py-2"
                    style={{ clipPath: "polygon(0px 0, 100% 0, 100% 100%, 0px 100%)" }}
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `px-4 py-1 text-sm font-black uppercase tracking-widest transition-all duration-150 ${isActive
                                    ? "text-p"
                                    : "text-white hover:text-p"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Angled Cyberpunk Yellow CTA Button */}
              <Btn text={'Sign Up'} path={"#"}/>
            </div>
        </header>
    );
}
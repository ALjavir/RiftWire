import { NavLink } from "react-router";
import logoImg from "~/assets/image/logo.png"
export default function Footer() {
    const navItems = [
        { name: "portfolio", path: "/portfolio" },
        { name: "How It Works", path: "/About-US" },
        { name: "Pricing", path: "/Our-App" },
        { name: "About", path: "/Contacts" },
        { name: "Login", path: "/Contacts" },
    ];
    return (
        <footer id="footer">
            <div className="footer-top-part">

                <img
                    className="logo"
                    src={logoImg}
                    alt="Pixelab"
                />

                <p className="copy-right-info">
                    © 2020 Epixelab. All rights reserved.
                </p>

                <nav className="nav-menu">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

            </div>

            <div className="footer-bottom-part">
                <p>
                    Startup Framework contains components and complex blocks
                    which can easily be integrated into almost any design.
                </p>
            </div>
        </footer>
    )
}
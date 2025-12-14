import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPos = window.scrollY;

            let current = "#home"; // default

            sections.forEach((section) => {
                const top = section.offsetTop - 120; // adjust for navbar height
                const bottom = top + section.offsetHeight;

                if (scrollPos >= top && scrollPos < bottom) {
                    current = `#${section.id}`;
                }
            });

            setActiveLink(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // call once on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = ["#home", "#about", "#skills", "#projects", "#qualification", "#contact"];

    return (
        <header className="navbar">
            <div className="nav-inner">
                <div className="logo">Arya</div>
                <nav className="nav-links">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={link}
                            className={activeLink === link ? "active" : ""}
                        >
                            {link.replace("#", "").charAt(0).toUpperCase() + link.slice(2)}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

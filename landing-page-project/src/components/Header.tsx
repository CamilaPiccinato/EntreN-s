import Logo from "../assets/Logotipo.png"
import Close from "../assets/close.svg"
import Menu from "../assets/menu.svg"
import { useEffect, useState } from "react";
import "../styles/header.css";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <header className="container py-sm">
            <nav className="flex items-center">
                <img className="Logo" src={Logo} alt="Logo" />
                <div className="desktop-only">
                    <ul className="flex gap-1">
                        <li><a href="#">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#clientes">Clientes</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>

                <div className="mobile-menu">
                    {showMobileMenu ? (
                        <div className="mobile-menu-content">
                            <div className="container flex">
                                <ul>
                                    <li><a href="#" onClick={() => setShowMobileMenu(false)}>Home</a></li>
                                    <li><a href="#sobre" onClick={() => setShowMobileMenu(false)}>Sobre</a></li>
                                    <li><a href="#produtos" onClick={() => setShowMobileMenu(false)}>Produtos</a></li>
                                    <li><a href="#clientes" onClick={() => setShowMobileMenu(false)}>Clientes</a></li>
                                    <li><a href="#contact" onClick={() => setShowMobileMenu(false)}>Contato</a></li>
                                </ul>
                                <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                            <img src={Menu} alt="ícone menu" width={24} height={24} />
                        </span>
                    )}
                </div>
            </nav>
        </header>
    );
}
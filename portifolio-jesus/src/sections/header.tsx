import { AppButton } from "../components/app-button";
import { NavLink } from "../components/nav-link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "../components/menu-overlay";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../components/lang-button";
import myLogo from "../assets/Logo6.png";

export function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { t } = useTranslation();

    const navLinks = [
        {
            title: t('app.about_me'),
            path: "#about",
        },
        {
            title: t('app.projects'),
            path: "#projects",
        },
        {
            title: t('app.certifications'),
            path: "#certifications",
        },
    ];
    //ajuste
    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <img src={myLogo} alt="Logo Jesus" width={170} height={170} />
                <div className="mobile-menu flex md:hidden items-center justify-center gap-3">
                    <LanguageSelector />
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:flex md:w-auto items-center gap-5" id="navbar">
                    <div className="mr-7 flex items-center">
                        <LanguageSelector />
                    </div>
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                    <a href="/#contact">
                        <AppButton>{t('app.contact')}</AppButton>
                    </a>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
}

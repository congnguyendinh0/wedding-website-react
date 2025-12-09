import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
                    C & H
                </div>

                <LanguageSwitcher />

                <ul className="navbar-links">
                    <li onClick={() => scrollToSection('hero')}>{t.nav.home}</li>
                    <li onClick={() => scrollToSection('story')}>{t.nav.story}</li>
                    <li onClick={() => scrollToSection('gallery')}>{t.nav.gallery}</li>
                    <li onClick={() => scrollToSection('faq')}>{t.nav.faq}</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

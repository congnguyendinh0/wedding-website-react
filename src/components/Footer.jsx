import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-gold)' }}>{t.footer.text}</p>
        </footer>
    );
};

export default Footer;

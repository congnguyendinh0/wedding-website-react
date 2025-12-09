import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer>
            <p className="script-font">{t.footer.text}</p>
        </footer>
    );
};

export default Footer;

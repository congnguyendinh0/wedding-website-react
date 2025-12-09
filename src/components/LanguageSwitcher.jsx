import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, switchLanguage } = useLanguage();

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${language === 'de' ? 'active' : ''}`}
                onClick={() => switchLanguage('de')}
            >
                DE
            </button>
            {/* <button
                className={`lang-btn ${language === 'vi' ? 'active' : ''}`}
                onClick={() => switchLanguage('vi')}
            >
                VN
            </button> */}
            <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => switchLanguage('en')}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;

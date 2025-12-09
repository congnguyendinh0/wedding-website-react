import React from 'react';
import coverImage from '../assets/GAU07851.jpg';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero">
            <div className="hero-content" style={{ opacity: 1, visibility: 'visible' }}>
                <p className="intro-text" style={{ color: 'var(--text-color)', opacity: 1 }}>{t.hero.intro}</p>
                <h1 className="couple-names" style={{ color: 'var(--accent-green)', opacity: 1 }}>DINH CONG<br /> <span className="ampersand">&</span> <br /> THU HANG</h1>
                <p className="date" style={{ color: 'var(--accent-gold)', opacity: 1 }}>{t.hero.date}</p>

                <div className="details-grid" style={{ marginTop: '40px', marginBottom: '40px' }}>
                    <div className="detail-card">
                        <h3 style={{ color: 'var(--accent-green)' }}>{t.hero.ceremony}</h3>
                        <p className="time" style={{ color: 'var(--text-color)' }}>11:00 AM</p>
                        <p className="location" style={{ color: 'var(--text-color)' }}>Standesamt Hohen Neuendorf</p>
                        <p className="address" style={{ color: 'var(--text-color)' }}>Oranienburger Str. 2, 16540 Hohen Neuendorf</p>
                    </div>

                    <div className="divider-vertical"></div>

                    <div className="detail-card">
                        <h3 style={{ color: 'var(--accent-green)' }}>{t.hero.celebration}</h3>
                        <p className="cuisine" style={{ color: 'var(--text-color)' }}>01:00 PM</p>
                        <p className="location" style={{ color: 'var(--text-color)' }}>Filo d'Olio Glienicke</p>
                        <p className="address" style={{ color: 'var(--text-color)' }}>Hauptstraße 19, 16548 Glienicke/Nordbahn</p>
                    </div>
                </div>

                <div className="cover-image-container">
                    <img src={coverImage} alt="Cover" className="cover-image" />
                </div>
                <div className="scroll-indicator">↓</div>
            </div>
        </section>
    );
};

export default Hero;

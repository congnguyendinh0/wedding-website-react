import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import img1 from '../assets/GAU07225-2.jpg';
import img2 from '../assets/GAU07379.jpg';
import img3 from '../assets/GAU07595.jpg';
import img4 from '../assets/GAU07851.jpg';
import img5 from '../assets/GAU07881.jpg';
import img6 from '../assets/GAU08263.jpg';
import img7 from '../assets/GAU08532.jpg';
import img8 from '../assets/GAU08611.jpg';
import img9 from '../assets/GAU08762.jpg';

const images = [
    { src: img1, alt: 'Pre-wedding photo 1', className: 'tall' },
    { src: img2, alt: 'Pre-wedding photo 2', className: 'tall' },
    { src: img3, alt: 'Pre-wedding photo 3', className: 'wide' },
    { src: img4, alt: 'Pre-wedding photo 4', className: 'wide' },
    { src: img5, alt: 'Pre-wedding photo 5', className: '' },
    { src: img6, alt: 'Pre-wedding photo 6', className: 'tall' },
    { src: img7, alt: 'Pre-wedding photo 7', className: 'wide' },
    { src: img8, alt: 'Pre-wedding photo 8', className: '' },
    { src: img9, alt: 'Pre-wedding photo 9', className: 'wide' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useLanguage();

    const openLightbox = (img) => {
        setSelectedImage(img);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    const [activeIndices, setActiveIndices] = useState(new Set());

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        setActiveIndices((prev) => new Set(prev).add(index));
                    } else {
                        setActiveIndices((prev) => {
                            const next = new Set(prev);
                            next.delete(index);
                            return next;
                        });
                    }
                });
            },
            {
                root: document.querySelector('.bento-grid'),
                threshold: 0.7, // Trigger when 70% visible
            }
        );

        const items = document.querySelectorAll('.bento-item');
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="gallery" className="gallery-container content-section">
            <h2 className="section-title">{t.gallery.title}</h2>
            <div className="bento-grid">
                {images.map((img, index) => (
                    <div
                        key={index}
                        data-index={index}
                        className={`bento-item ${img.className} ${activeIndices.has(index) ? 'active' : ''}`}
                        onClick={() => openLightbox(img)}
                    >
                        <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                ))}
            </div>

            {selectedImage && (
                ReactDOM.createPortal(
                    <div className="lightbox" onClick={closeLightbox}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage.src} alt={selectedImage.alt} />
                            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
                        </div>
                    </div>,
                    document.body
                )
            )}
        </section>
    );
};

export default Gallery;

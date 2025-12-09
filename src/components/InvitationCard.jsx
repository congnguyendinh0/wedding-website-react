import React, { useState } from 'react';
import Envelope from './Envelope';
import PhotoReveal from './PhotoReveal';
import { useLanguage } from '../context/LanguageContext';

const InvitationCard = ({ onComplete }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPhoto, setShowPhoto] = useState(false);
    const { t } = useLanguage();

    const handleOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
            // Delay showing the photo until the envelope opens (slower animation)
            setTimeout(() => {
                setShowPhoto(true);

                // Notify parent (App) to show main content after photo is revealed
                // Giving it more time for the photo to be appreciated
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 3000); // Increased from 1500ms
            }, 1500); // Increased from 800ms
        }
    };

    return (
        <div className="invitation-container">
            {!showPhoto && (
                <>
                    <Envelope isOpen={isOpen} onClick={handleOpen} />
                    {!isOpen && <p className="envelope-hint">{t.invitation.hint}</p>}
                </>
            )}
            <PhotoReveal isVisible={showPhoto} />
        </div>
    );
};

export default InvitationCard;

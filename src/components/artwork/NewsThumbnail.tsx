import React from "react";
import { NewsManager } from '../../data/NewsManager';
import './ArtworkThumbnail.css';
import { useTranslation } from "react-i18next";

interface ArtworkThumbnailProps {
    id: string;
    setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

const NewsThumbnail: React.FC<ArtworkThumbnailProps> = ({ id, setOpenPopup }) => {
    const newsManager = NewsManager.getInstance();
    const newItem = newsManager.getById(id);7
    const { t } = useTranslation();

    if (!newItem) {
        return <div>New not found</div>;
    }

    const handleClick = () => {
        setOpenPopup(id);
    };

    const formattedDate = new Date(newItem.date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
        <div
            className="artwork-thumbnail"
            onClick={handleClick}
        >
            <div className="text-content">
                <h2><i>{t(newItem.name)}</i></h2>
                <h3><i>{formattedDate}</i></h3>
            </div>
            <div className="image-content">
                <img src={newItem.thumbnail} alt={newItem.name} />
            </div>
        </div>
    );
};

export default NewsThumbnail;
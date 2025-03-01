import React from "react";
import { GalleryManager } from '../../../data/GalleryManager';
import { PublicacionsArtwork } from '../../../types';
import './PublicationThumbnail.css'; // Import the CSS file

interface PublicationThumbnailProps {
    id: string;
    setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

const PublicationThumbnail: React.FC<PublicationThumbnailProps> = ({ id, setOpenPopup }) => {
    const galleryManager = GalleryManager.getInstance();
    const artwork = galleryManager.getById(id);

    if (!artwork) {
        return <div>Artwork not found</div>;
    }

    if (artwork.type !== "Publicacions") {
        return <div>Error: This artwork is not a Publication.</div>;
    }

    const handleClick = () => {
        setOpenPopup(id);
    };

    return (
        <div
            className="publication-thumbnail"
            onClick={handleClick} // Correct usage of onClick
        >
            <div className="text-content">
                <h2><i>{artwork.name}</i></h2>
                <p className="editor">{(artwork as PublicacionsArtwork).editor}</p>
                <p className="year">{artwork.year}</p>
            </div>
            <div className="image-content">
                <img src={artwork.thumbnail} alt={artwork.name} />
            </div>
        </div>
    );
};

export default PublicationThumbnail;
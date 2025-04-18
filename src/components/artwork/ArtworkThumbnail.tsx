import React from "react";
import { GalleryManager } from '../../data/GalleryManager';
import './ArtworkThumbnail.css'; // Import the CSS file

interface ArtworkThumbnailProps {
    id: string;
    setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

const ArtworkThumbnail: React.FC<ArtworkThumbnailProps> = ({ id, setOpenPopup }) => {
    const galleryManager = GalleryManager.getInstance();
    const artwork = galleryManager.getById(id);

    if (!artwork) {
        return <div>Artwork not found</div>;
    }

    const handleClick = () => {
        setOpenPopup(id);
    };

    return (
        <div
            className="artwork-thumbnail"
            onClick={handleClick}
        >
            <div className="text-content">
                <h2><i>{artwork.name}</i></h2>
            </div>
            <div className="image-content">
                <img src={artwork.thumbnail} alt={artwork.name} />
            </div>
        </div>
    );
};

export default ArtworkThumbnail;
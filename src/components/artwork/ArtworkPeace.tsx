import React from "react";
import { GalleryManager } from '../../data/GalleryManager';
import { GransFormatsArtwork, PublicacionsArtwork } from '../../types';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import './ArtworkPeace.css'; // Import the CSS file

interface ArtworkPeaceProps {
    id: string;
}

const ArtworkPeace: React.FC<ArtworkPeaceProps> = ({ id }) => {
    const galleryManager = GalleryManager.getInstance();
    const artwork = galleryManager.getById(id);

    if (!artwork) return null;

    return (
        <div className="artwork-peace">
            
            <div className="artwork-content">
                <img
                    className="floating-image"
                    src={artwork.thumbnail}
                    alt={artwork.name}
                />
                <div className="text-section">
                    {artwork.type === "GransFormats" && (
                        <>
                            <p><strong>Technique:</strong> {(artwork as GransFormatsArtwork).technique}</p>
                            <p><strong>Dimensions:</strong> {(artwork as GransFormatsArtwork).dimensions}</p>
                        </>
                    )}
                    {artwork.type === "Publicacions" && (
                        <p><strong>Editor:</strong> {(artwork as PublicacionsArtwork).editor}</p>
                    )}
                    <p><strong>Year:</strong> {artwork.year}</p>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{artwork.description}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default ArtworkPeace;

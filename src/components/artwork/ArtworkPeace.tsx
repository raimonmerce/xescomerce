import React from "react";
import { GalleryManager } from '../../data/GalleryManager';
import { Artwork } from '../../types';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ArtworkPeace.css';
import { useTranslation } from "react-i18next";


interface ArtworkPeaceProps {
    id: string;
}

const ArtworkPeace: React.FC<ArtworkPeaceProps> = ({ id }) => {
    const galleryManager = GalleryManager.getInstance();
    const artwork = galleryManager.getById(id);
    const { t } = useTranslation();

    if (!artwork) return null;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className="artwork-peace">
            
            <div className="artwork-content">
                <div className="floating-image">
                    {artwork.images && artwork.images.length <= 1 ? (
                        <img
                            className="image-carrusel"
                            src={artwork.thumbnail}
                            alt={artwork.name}
                        />
                    ) : (
                        <Slider {...settings}>
                            {artwork.images && artwork.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        className="image-carrusel"
                                        src={image}
                                        alt={`${artwork.name} - ${index}`}
                                    />
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
                <div className="text-section">
                    {artwork.editor && (
                        <p><strong>Editor:</strong> {artwork.editor}</p>
                    )}
                    {artwork.technique && (
                        <p>
                            <strong>Technique:</strong>{" "}
                            {artwork.technique.startsWith("assets.") ? t(artwork.technique) : artwork.technique}
                        </p>                    
                    )}
                    {artwork.dimensions && (
                        <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
                    )}

                    <p><strong>Year:</strong> {artwork.year}</p>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{t(artwork.description)}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default ArtworkPeace;

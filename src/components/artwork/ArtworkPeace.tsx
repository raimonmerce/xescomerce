import React from "react";
import { GalleryManager } from '../../data/GalleryManager';
import { GransFormatsArtwork, PublicacionsArtwork } from '../../types';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ArtworkPeace.css'; // Import the CSS file

interface ArtworkPeaceProps {
    id: string;
}

const ArtworkPeace: React.FC<ArtworkPeaceProps> = ({ id }) => {
    const galleryManager = GalleryManager.getInstance();
    const artwork = galleryManager.getById(id);

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
                    {artwork.images.length <= 1 ? (
                        <img
                            className="image-carrusel"
                            src={artwork.thumbnail}
                            alt={artwork.name}
                        />
                    ) : (
                        <Slider {...settings}>
                            {artwork.images.map((image, index) => (
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

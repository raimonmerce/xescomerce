import React from "react";
import { GalleryManager } from '../../data/GalleryManager';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-white mx-auto my-5 p-5 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start">
        {/* Image Container */}
        <div className="order-1 md:order-2 w-full md:w-[40%] max-h-[300px] md:max-h-full mb-4 md:mb-0 md:ml-4">
          {artwork.images && artwork.images.length > 1 ? (
            <Slider {...settings}>
              {artwork.images.map((image, index) => (
                <div key={index}>
                  <img
                    className="w-full h-auto block object-contain"
                    src={image}
                    alt={`${artwork.name} - ${index}`}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              className="w-full mb-[15px] h-auto block object-contain"
              src={artwork.images?.length === 1? artwork.images[0] : artwork.thumbnail}
              alt={artwork.name}
            />
          )}
        </div>

        {/* Text Container */}
        <div className="order-2 md:order-1 flex-1 min-w-[50%] text-justify text-gray-900">
          {artwork.editor && (
            <p className="my-2 text-gray-700">
              <strong className="text-gray-900">{t('assets.terms.editor')}:</strong> {artwork.editor}
            </p>
          )}
          {artwork.technique && (
            <p className="my-2 text-gray-700">
              <strong className="text-gray-900">{t('assets.terms.technique')}:</strong>{" "}
              {artwork.technique.startsWith("assets.") ? t(artwork.technique) : artwork.technique}
            </p>
          )}
          {artwork.dimensions && (
            <p className="my-2 text-gray-700">
              <strong className="text-gray-900">{t('assets.terms.dimensions')}:</strong> {artwork.dimensions}
            </p>
          )}
          {artwork.location && (
            <p className="my-2 text-gray-700">
              <strong className="text-gray-900">{t('assets.terms.location')}:</strong>{" "}
              {artwork.location.startsWith("assets.") ? t(artwork.location) : artwork.location}
            </p>
          )}
          <p className="my-2 text-gray-700">
            <strong className="text-gray-900">{t('assets.terms.year')}:</strong> {artwork.year}
          </p>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {t(artwork.description)}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ArtworkPeace;

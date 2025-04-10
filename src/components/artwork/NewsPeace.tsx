import React from "react";
import { NewsManager } from '../../data/NewsManager';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

interface NewsPeaceProps {
  id: string;
}

const NewsPeace: React.FC<NewsPeaceProps> = ({ id }) => {
  const newsManager = NewsManager.getInstance();
  const news = newsManager.getById(id);
  const { t } = useTranslation();

  if (!news) return null;

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

  const formattedDate = new Date(news.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white mx-auto my-5 p-5 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start">
        {/* Image Container */}
        <div className="order-1 md:order-2 w-full md:w-[40%] max-h-[300px] md:max-h-full mb-4 md:mb-0 md:ml-4">
          {news.images && news.images.length >= 1 ? (
            <Slider {...settings}>
              {news.images.map((image, index) => (
                <div key={index}>
                  <img
                    className="w-full h-auto block object-contain"
                    src={image}
                    alt={`${news.name} - ${index}`}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              className="w-full mb-[15px] h-auto block object-contain"
              src={news.thumbnail}
              alt={news.name}
            />
          )}
        </div>

        {/* Text Container */}
        <div className="order-2 md:order-1 flex-1 min-w-[50%] text-justify text-gray-900">
          {news.location && (
            <p className="my-2 text-gray-700">
              <strong className="text-gray-900">{t('assets.terms.location')}:</strong> {news.location}
            </p>
          )}
          <p className="my-2 text-gray-700">
            <strong className="text-gray-900">{t('assets.terms.year')}:</strong> {formattedDate}
          </p>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {t(news.description)}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default NewsPeace;

import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { NewsManager } from '../../data/NewsManager';
import NewsThumbnail from "../artwork/NewsThumbnail";
import FrameThumbnail from "../artwork/FrameThumbnail";

interface NewsletterProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

const Newsletter: React.FC<NewsletterProps> = ({ setOpenPopup }) => {
  const { t } = useTranslation();
  const newsManager = NewsManager.getInstance();
  const [news, _setNews] = useState(newsManager.getAllNewsIDs());

  const handleClick = (id: string) => {
    setOpenPopup(id);
  };

  return (
    <>
      <p className="text-[20px] md:text-[30px] p-3">{t("header.newsletter")}</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {news.map((item, num) => {
          const newItem = newsManager.getById(item);
          if (!newItem) return;
          const formattedDate = new Date(newItem.date).toLocaleDateString('en-GB');
          return (
          <FrameThumbnail
            key={num}
            name={newItem.name}
            imageUrl={newItem.thumbnail}
            onClick={() => handleClick(item)}
            isBig={true}
            date={formattedDate}
          />
          // <NewsThumbnail key={num} id={item} setOpenPopup={setOpenPopup} />
        )})}
      </div>
    </>
  );
  
};

export default Newsletter;

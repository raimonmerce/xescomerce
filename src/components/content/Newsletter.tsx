import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { NewsManager } from '../../data/NewsManager';
import FrameThumbnail from "../artwork/FrameThumbnail";

interface NewsletterProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

const Newsletter: React.FC<NewsletterProps> = ({ setOpenPopup }) => {
  const { t } = useTranslation();
  const newsManager = NewsManager.getInstance();
  const [news] = useState(newsManager.getAllNewsIDs());

  const handleClick = (id: string) => {
    setOpenPopup(id);
  };

  return (
    <>
      <div className="flex items-center w-full px-4 pb-10">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="text-[25px] md:text-[30px] px-4 text-center whitespace-nowrap">{t("header.newsletter")}</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <p className="flex-grow text-[20px] md:text-[25px] text-center mb-[20px]">{t("newsletter.description")}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-max mx-auto">
        {news.map((item, num) => {
          const newItem = newsManager.getById(item);
          if (!newItem) return;
          const formattedDate = newItem.date? new Date(newItem.date).toLocaleDateString('en-GB') : null;
          return (
          <FrameThumbnail
            key={num}
            name={newItem.name}
            imageUrl={newItem.thumbnail}
            onClick={() => handleClick(item)}
            isBig={false}
            {...(formattedDate ? { subtitle: formattedDate } : {})}
          />
        )})}
      </div>
    </>
  );
  
};

export default Newsletter;

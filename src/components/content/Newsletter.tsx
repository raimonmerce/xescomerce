import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { NewsManager } from '../../data/NewsManager';
import NewsThumbnail from "../artwork/NewsThumbnail";

interface NewsletterProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

const Newsletter: React.FC<NewsletterProps> = ({ setOpenPopup }) => {
  const { t } = useTranslation();
  const newsManager = NewsManager.getInstance();
  const [news, _setNews] = useState(newsManager.getAllNewsIDs());

  return (
    <>
      <p className="text-[20px] md:text-[30px] p-3">{t("header.newsletter")}</p>
      {news.map((item, num) => (
        <NewsThumbnail key={num} id={item} setOpenPopup={setOpenPopup} />
      ))}
    </>
  );
  
};

export default Newsletter;

import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { VideoManager } from '../../data/VideoManager';
import FrameThumbnail from "../artwork/FrameThumbnail";

const Videos: React.FC = () => {
  const { t } = useTranslation();
  const videoManager = VideoManager.getInstance();
  const [videos] = useState(videoManager.getAllVideosIDs());

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="flex items-center w-full px-4 pb-10">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="text-[25px] md:text-[30px] px-4 text-center whitespace-nowrap">{t("header.videos")}</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 w-max mx-auto">
        {videos.map((item, num) => {
          const videoItem = videoManager.getById(item);
          if (!videoItem) return;
          return (
          <FrameThumbnail
            key={num}
            name={videoItem.subtitle ? videoItem.subtitle : ""}
            imageUrl={videoItem.thumbnail}
            onClick={() => handleClick(videoItem.url)}
            isBig={false}
            subtitle={videoItem.name}
          />
        )})}
      </div>
    </>
  );
  
};

export default Videos;

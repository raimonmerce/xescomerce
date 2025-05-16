import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FrameThumbnail from "../artwork/FrameThumbnail";
import { GalleryManager } from '../../data/GalleryManager';
import { VideoManager } from '../../data/VideoManager';
import { photos } from '../../assets/photos/photos';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const thumbnails = {
  "accions" : {"name": "thumbnails.accions", "image": photos.accions.samurais.samurais1},
  "cartells" : {"name": "thumbnails.cartells", "image": photos.cartells.cartell2},
  "escultures" : {"name": "thumbnails.escultures", "image": photos.escultura.m.m1},
  "experiments" : {"name": "thumbnails.experiments", "image": photos.experiments.totes.totes1},
  "gransformats" : {"name": "thumbnails.gransformats", "image": photos.gransFormats.gf6.gf6},
  "instalacions" : {"name": "thumbnails.instalacions", "image": photos.instalacions.boig.boig1},
  "murals" : {"name": "thumbnails.murals", "image": photos.murals.pilota.pilota1},
  "publicacions" : {"name": "thumbnails.publicacions", "image": photos.publicacions.pub1},
  "series" : {"name": "thumbnails.series", "image": photos.series.diccionari.diccionari1},
  "videos" : {"name": "thumbnails.videos", "image": photos.videos.videoPortada},
}

interface GalleryProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
  setGoToTab: React.Dispatch<React.SetStateAction<string>>;
}

const Gallery: React.FC<GalleryProps> = ({ setOpenPopup, setGoToTab }) => {
  const { t } = useTranslation();
  const galleryManager = GalleryManager.getInstance();
  const videoManager = VideoManager.getInstance();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
        const path = location.pathname.toLowerCase();
        const segments = path.split('/').filter(Boolean);
        if (segments.length === 0) setSelectedCategory(null);
        else if (segments.length === 1) {
          setSelectedCategory(segments[0])
          setOpenPopup(null);
        }
        else if (segments.length === 2) {
          setOpenPopup(segments[1]);
        }
    }, [location.pathname]);

  const handleClick = (id: string) => {
    setOpenPopup(id);
    navigate('/' + selectedCategory + "/" + id.toLowerCase());
  };

  const handleClickVideo = (url: string) => {
    window.open(url, "_blank");
  };

  const handleSelectCategory = (name: string) => {
    setSelectedCategory(name)
    setGoToTab("gallery")
    navigate('/' + name);
  };

  const handleGoBack = () => {
    setSelectedCategory(null);
    navigate('/');
  };

  return (
    <>
      <div className="flex items-center w-full px-4 pb-10">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="text-[25px] md:text-[30px] px-4 text-center whitespace-nowrap">{t("header.gallery")}</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {selectedCategory ? (
            <motion.div
              key="galleryView"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <button
                  className="text-[15px] md:text-[20px] text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer flex items-center gap-2"
                  onClick={() => handleGoBack()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {t("gallery.back")}
                </button>
              </div>
              <p className="flex-grow text-[20px] md:text-[25px] text-center mb-[20px]">{t(thumbnails[selectedCategory as keyof typeof thumbnails]?.name ?? "")}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-max mx-auto">
                {(() => {
                  if (selectedCategory === "videos") {
                    const videos = videoManager.getAllVideosIDs();
                    return videos.map((item, num) => {
                      const videoItem = videoManager.getById(item);
                      if (!videoItem) return;
                      return (
                      <FrameThumbnail
                        key={num}
                        name={videoItem.subtitle ? videoItem.subtitle : ""}
                        imageUrl={videoItem.thumbnail}
                        onClick={() => handleClickVideo(videoItem.url)}
                        isBig={false}
                        subtitle={videoItem.name}
                      />
                    )})
                  } else {
                    const ids = galleryManager.getIdsByType(selectedCategory);
                    return ids.map((id) => {
                      const artwork = galleryManager.getById(id);
                      if (!artwork) return null;
                      return (
                        <FrameThumbnail
                          key={id}
                          name={artwork.name}
                          imageUrl={artwork.thumbnail}
                          onClick={() => handleClick(id)}
                          isBig={false}
                        />
                      );
                    });
                  }
                })()}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="categoryView"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-max mx-auto"
            >
              {Object.entries(thumbnails).map(([name, thumbnail]) => (
                <FrameThumbnail
                  key={name}
                  name={thumbnail.name}
                  imageUrl={thumbnail.image}
                  onClick={() => handleSelectCategory(name)}
                  isBig={false}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;

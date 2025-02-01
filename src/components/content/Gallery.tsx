import React from "react";

interface GalleryProps {
  setOpenPeace: React.Dispatch<React.SetStateAction<string>>;
}

const Gallery: React.FC<GalleryProps> = ({setOpenPeace}) => {
  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="image-item">
          <img src="https://via.placeholder.com/150" alt="Image 1" />
        </div>
        <div className="image-item">
          <img src="https://via.placeholder.com/150" alt="Image 2" />
        </div>
        <div className="image-item">
          <img src="https://via.placeholder.com/150" alt="Image 3" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

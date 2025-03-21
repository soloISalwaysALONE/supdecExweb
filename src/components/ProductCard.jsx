import React, { useState, useEffect } from "react";

const ProductCard = ({ id, hoveredProduct, setHoveredProduct, autoSwitch, setAutoSwitch, handleToggleFavorite, favorites = {} }) => {
  const images = [
    "1_card.png",
    "2_card.png",
    "3_card.png",
    "4_card.png",
    "5_card.png",
    "6_card.png",
    "7_card.png",
    "8_card.png",
    "9_card.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(id % images.length);
  const [fade, setFade] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorites[id] || false); // Состояние для избранного

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  useEffect(() => {
    if (!autoSwitch) return;
    const interval = setInterval(() => {
      changeImage(1);
    }, 7500);

    return () => clearInterval(interval);
  }, [autoSwitch]);

  const changeImage = (step) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + step + images.length) % images.length;
        return newIndex;
      });
      setFade(false);
    }, 700);
  };

  const handleFeatureClick = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    handleToggleFavorite(id, newFavoriteState);
  };

  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-[1.4s] ease-out 
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"} 
        ${hoveredProduct !== null && hoveredProduct !== id ? "opacity-50 pointer-events-none" : ""} 
        ${hoveredProduct === id ? "scale-[1.08]" : ""}`}
      onMouseEnter={() => {
        setHoveredProduct(id);
        setAutoSwitch(false);
      }}
      onMouseLeave={() => {
        setHoveredProduct(null);
        setAutoSwitch(true);
      }}
      style={{ width: "250px", height: "250px" }}
    >
      <div className="absolute top-2 right-2 flex flex-col space-y-2 z-20">
        <img
          src={isFavorite ? "/pressed_ftrs.png" : "/features.png"}
          alt="Features"
          className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110"
          onClick={handleFeatureClick}
        />
        <img
          src="/shop.png"
          alt="Shop"
          className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110"
        />
      </div>

      <div className="relative bg-white bg-opacity-5 backdrop-blur-sm p-4 border rounded-md shadow-md w-full h-full transition-all duration-[1.4s] flex flex-col">
        <div className="relative w-full h-[70%] flex items-center justify-between px-4">
          <button
            onClick={() => changeImage(-1)}
            className="p-2 bg-gray-200 bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75 z-10"
          >
           ◄ 
          </button>

          {/* Убедитесь, что текущий индекс валиден */}
          <img
            key={images[currentImageIndex]}
            src={`/${images[currentImageIndex]}`}
            alt={`product ${id}`}
            className={`w-[70%] h-auto transition-opacity duration-[1.8s] ease-in-out ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />

          <button
            onClick={() => changeImage(1)}
            className="p-2 bg-gray-200 bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75 z-10"
          >
            ►
          </button>
        </div>

        <div className="mt-2 flex flex-col items-stretch ml-[22%]">
          <p className="font-bold text-lg font-[Montserrat]">Название</p>
          <p className="text-lg font-light font-[Montserrat]">25.000 руб.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState } from 'react';

const ProductCard = ({ id, hoveredProduct, setHoveredProduct }) => {
  const [images] = useState(["1.png", "2.png", "3.png"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`relative flex items-start transition-transform duration-300 ease-in-out ${
        hoveredProduct === id ? "scale-110" : ""
      }`}
      onMouseEnter={() => setHoveredProduct(id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Левая часть — Описание, характеристики и кнопки */}
      {hoveredProduct === id && (
        <div className="absolute left-[-170px] top-0 w-40 p-4 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-md transition-opacity duration-300">
          <p className="text-gray-800 text-xs">Описание товара...</p>
          <p className="text-gray-800 text-xs mt-2">Характеристики...</p>

          {/* Кнопки теперь под характеристиками */}
          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-blue-500 text-white p-2 rounded-md">В корзину</button>
            <button className="bg-green-500 text-white p-2 rounded-md">Быстрая покупка</button>
          </div>
        </div>
      )}

      {/* Основная карточка товара */}
      <div className="relative bg-white bg-opacity-5 backdrop-blur-sm p-4 border rounded-md shadow-md w-[250px] transition-all duration-300">
        <div className="flex flex-col items-center">
          <img
            src={`/${images[currentImageIndex]}`}
            alt={`product ${id}`}
            className="w-[70%] transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </div>

      {/* Вертикальная карусель изображений (Теперь не перекрывает кнопки) */}
      {hoveredProduct === id && (
        <div className="absolute right-[-50px] backdrop-blur-md top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 z-20">
          <button
            onClick={prevImage}
            className="p-3 bg-gray-200 bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75"
          >
            ▲
          </button>

          <img
            src={`/${images[currentImageIndex]}`}
            alt={`product ${id}`}
            className="w-[50%] transition-transform duration-300 ease-in-out transform hover:scale-110"
          />

          <button
            onClick={nextImage}
            className="p-3 bg-gray-200 bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75"
          >
            ▼
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

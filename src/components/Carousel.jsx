import React, { useState } from 'react';

const ProductCard = ({ id, hoveredProduct, setHoveredProduct }) => {
  const [images] = useState(["1.png", "2.png", "3.png"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
  const nextIndex = (currentImageIndex + 1) % images.length;

  const nextImage = () => {
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div
      className="relative transition-transform duration-300 ease-in-out transform hover:scale-105 origin-bottom"
      onMouseEnter={() => setHoveredProduct(id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Основной контейнер карточки */}
      <div className="bg-white bg-opacity-5 backdrop-blur-sm p-4 border rounded-md shadow-md relative overflow-hidden">
        <div className="flex justify-center items-center relative">
          
          {/* Превью предыдущего изображения (фон для кнопки) */}
          <img
            src={`/${images[prevIndex]}`}
            alt="prev"
            className="absolute left-0 w-[30%] opacity-30"
          />
          
          {/* Главное изображение */}
          <img
            src={`/${images[currentImageIndex]}`}
            alt={`product ${id}`}
            className="w-[60%] transition-transform duration-300 transform"
          />

          {/* Превью следующего изображения (фон для кнопки) */}
          <img
            src={`/${images[nextIndex]}`}
            alt="next"
            className="absolute right-0 w-[30%] opacity-30"
          />
        </div>

        {/* Кнопки покупки */}
        <div className="flex justify-between mt-2">
          <button className="bg-blue-500 text-white p-2 rounded-md">В корзину</button>
          <button className="bg-green-500 text-white p-2 rounded-md">Быстрая покупка</button>
        </div>
      </div>

      {/* Оверлей при наведении */}
      {hoveredProduct === id && (
        <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm shadow-lg p-4 flex flex-col justify-center items-center">
          <p className="text-center">Описание товара...</p>
          <p className="text-center">Характеристики...</p>

          <div className="flex justify-between items-center mt-4 w-full relative">
            {/* Кнопка назад (на фоне соседнего изображения) */}
            <button
              onClick={prevImage}
              className="absolute left-2 p-4 bg-gray-200 bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75 z-10"
            >
              &#60;
            </button>

            {/* Главное изображение */}
            <img
              src={`/${images[currentImageIndex]}`}
              alt={`product ${id}`}
              className="w-[70%] transition-transform duration-300 ease-in-out transform"
            />

            {/* Кнопка вперед (на фоне соседнего изображения) */}
            <button
              onClick={nextImage}
              className="absolute right-2 p-4 bg-gray-200 bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75 z-10"
            >
              &#62;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

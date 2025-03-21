import React, { useState } from 'react'; 
import { FaHeart } from 'react-icons/fa';

const Filters = ({ favorites, handleToggleFavorite }) => {
  const [isFavoritesVisible, setFavoritesVisible] = useState(false);

  return (
    <div className="fixed top-0 left-20 right-0 z-20 bg-orange-100 bg-opacity-55 backdrop-blur-md rounded-lg shadow-md py-2 px-4 flex justify-evenly items-center">
      <button className="border p-2 text-gray-700 hover:text-blue-700">Цена</button>
      <button className="border p-2 text-gray-700 hover:text-blue-700">Материал</button>
      <button className="border p-2 text-gray-700 hover:text-blue-700">Цвет</button>

      {/* Кнопка избранных */}
      <div className="relative">
        <button 
          className="border p-2 text-gray-700 hover:text-blue-700"
          onClick={() => setFavoritesVisible(!isFavoritesVisible)}
        >
          <FaHeart />
        </button>
        
        {/* Отображение количества избранных товаров */}
        {Object.keys(favorites).length > 0 && (
          <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-1 rounded-full">
            {Object.keys(favorites).length}
          </span>
        )}

        {/* Выпадающий список избранных товаров */}
        {isFavoritesVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-100 z-[100] flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <div
              className="relative w-[85%] max-w-lg bg-white p-6 rounded-lg shadow-lg z-[101] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                className="absolute top-4 right-4"
                onClick={() => setFavoritesVisible(false)}
              >
                <FaTimes size={24} />
              </button>

              {/* Список товаров */}
              <div className="flex flex-col space-y-2 w-full">
                {Object.keys(favorites).length === 0 ? (
                  <p>В избранном нет товаров</p>
                ) : (
                  Object.keys(favorites).map((productId) => (
                    <div
                      key={productId}
                      className="flex items-center space-x-2 p-2 border-b border-gray-300"
                    >
                      <img
                        src={favorites[productId].image}
                        alt={favorites[productId].name}
                        className="w-8 h-8 object-cover rounded-md"
                      />
                      <span>{favorites[productId].name}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;

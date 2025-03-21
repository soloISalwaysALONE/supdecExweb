import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Filters from './components/Filters';
import ProductCatalog from './components/ProductCatalog';
import RegisterWindow from './components/RegisterWindow';
import './styles.css';  
import './index.css';  

const App = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState({});

  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId]) {
        newCart[productId] += 1;
      } else {
        newCart[productId] = 1;
      }
      return newCart;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const handleToggleFavorite = (productId, isFavorite) => {
    setFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites };
      if (isFavorite) {
        newFavorites[productId] = true;
      } else {
        delete newFavorites[productId];
      }
      return newFavorites;
    });
  };
  

  return (
    <div className="relative w-screen h-screen flex overflow-hidden pt-16">
      {/* Фон */}
      <div className="fixed inset-0 z-0 min-h-screen">
        <img src="/bg_main.png" alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Левая панель */}
      <div className="w-20 flex-shrink-0 h-full bg-gray-900 text-white">
        <Sidebar 
          setSearchExpanded={setSearchExpanded} 
          cart={cart} 
          favorites={favorites} 
        />
      </div>

      {/* Основной контейнер */}
      <div className="relative z-10 flex flex-col flex-1 h-full min-h-screen"> 
        {/* Фильтры */}
        <div className="w-full shadow-md py-20 px-4 rounded-lg sticky top-0 z-20">
          <Filters favorites={favorites} />
        </div>

        {/* Каталог товаров */}
        <div className="mt-[70px] pt-16 flex fixed w-full justify-center flex-1 p-4 overflow-auto">  
          <ProductCatalog 
            hoveredProduct={hoveredProduct} 
            setHoveredProduct={setHoveredProduct} 
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleToggleFavorite={handleToggleFavorite}
            cart={cart}
            favorites={favorites}
          />
        </div>
      </div>

      {/* Окно регистрации */}
      <RegisterWindow showRegister={showRegister} setShowRegister={setShowRegister} />
    </div>
  );
};

export default App;

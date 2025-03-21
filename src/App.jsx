import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Filters from './components/Filters';
import ProductCatalog from './components/ProductCatalog';
import RegisterWindow from './components/RegisterWindow';
import './styles.css';  
import './index.css';  

const App = () => {
  //const [searchExpanded, setSearchExpanded] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="relative w-screen h-screen flex overflow-hidden">
      
      {/* Фон */}
      <div className="absolute inset-0 z-0 min-h-screen">
        <img 
          src="/bg_main.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Левая панель */}
      <Sidebar setSearchExpanded={setSearchExpanded} />

      {/* Основной контейнер */}
      <div className="relative z-10 flex flex-col w-full h-full ml-20"> 
        
        {/* Фильтры */}
        <div className="w-full bg-orange-100 shadow-md py-2 px-4 rounded-lg sticky top-0 z-20">
          <Filters />
        </div>

        {/* Каталог товаров */}
        <div className="flex justify-center mt-[2vh] w-full">  
          <ProductCatalog hoveredProduct={hoveredProduct} setHoveredProduct={setHoveredProduct} />
        </div>
      </div>

      {/* Окно регистрации */}
      <RegisterWindow showRegister={showRegister} setShowRegister={setShowRegister} />
    </div>
  );
};

export default App;

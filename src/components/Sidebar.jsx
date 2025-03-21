import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaSearch, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <>
      {/* Полупрозрачная подложка поиска */}
      {isSearchExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-100 z-[100] flex justify-center items-center"
          onClick={handleSearchToggle}
        >
          <div
            className="relative w-[85%] h-[90%] bg-white p-6 rounded-lg shadow-lg z-[101] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Остановка всплытия клика
          >
            <button className="absolute top-4 right-4" onClick={handleSearchToggle}>
              <FaTimes size={24} />
            </button>
            <input
              type="text"
              placeholder="Диван..."
              className="w-[85%] h-[8%] px-4 text-lg border border-gray-400 rounded-md focus:outline-none"
            />

            {/* Категории товаров */}
            <div className="grid grid-cols-3 gap-4 mt-6 w-full text-center">
              {[
                { title: 'Мягкая мебель', subcategories: ['Диваны', 'Кресла', 'Пуфы'] },
                { title: 'Декор', subcategories: ['Картины', 'Вазы', 'Часы'] },
                { title: 'Светильники', subcategories: ['Настольные', 'Потолочные', 'Напольные'] },
                { title: 'Хрупкое', subcategories: ['Фарфор', 'Стекло', 'Керамика'] },
                { title: 'Sci-Fi', subcategories: ['Неоновые', 'Футуристические'] },
                { title: 'Кресла и стулья', subcategories: ['Офисные', 'Барные', 'Классические'] },
                { title: 'Столы', subcategories: ['Письменные', 'Обеденные', 'Журнальные'] },
              ].map((category, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveCategory(index)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Название категории (некликабельно, если активна подкатегория) */}
                  <button
                    className={`text-lg font-bold text-gray-800 transition-transform duration-200 ${
                      activeCategory === index ? 'pointer-events-none opacity-50' : 'hover:scale-110'
                    }`}
                  >
                    {category.title}
                  </button>

                  {/* Подкатегории */}
                  {activeCategory === index && (
                    <div
                      className="absolute left-0 w-full bg-white border-gray-300
                                 transition-transform duration-200 ease-out scale-100 shadow-md z-10"
                    >
                      {category.subcategories.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="p-2 border-l-1 border-b-[2px] border-gray-400 cursor-pointer text-gray-800 
                                    transition-all duration-200 hover:scale-110 hover:opacity-100 text-left"
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Боковая панель */}
      <aside className="fixed left-0 top-0 h-full w-20 bg-gray-800 text-white flex flex-col items-center p-4 space-y-6 z-50">
        <a href="/" className="text-xl font-bold">SUPDEC</a>

        {/* Контейнер поиска */}
        <div className="relative flex flex-col items-center w-full">
          <button onClick={handleSearchToggle} className="mb-2">
            <FaSearch size={24} className="text-white" />
          </button>
          <input
            type="text"
            placeholder="SEARCH"
            className="bg-gray-700 text-white w-[5vh] h-[80%] opacity-50 text-sm px-2 py-1 rounded-md text-center 
                       transition-all duration-300 ease-in-out cursor-pointer"
            style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
            onClick={handleSearchToggle}
            readOnly
          />
        </div>

        {/* Личный кабинет */}
        <div className="relative group">
          <FaUser size={24} />
          <div className="absolute left-full hidden group-hover:block bg-white text-black p-2 shadow-lg">
            <button className="block">Выход</button>
          </div>
        </div>

        {/* Корзина */}
        <div className="relative group">
          <FaShoppingCart size={24} />
          <div className="absolute left-full hidden group-hover:block bg-white text-black p-2 shadow-lg w-48">
            Корзина пуста
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

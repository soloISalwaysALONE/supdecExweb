import React from 'react';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Sidebar = ({ setSearchExpanded }) => {
  return (
    <aside className="w-[10vw] bg-gray-800 text-white flex flex-col items-center p-4 space-y-6">
      {/* Логотип */}
      <a href="/" className="relative text-xl font-bold">Logo</a>

      {/* Поиск */}
      <div className="relative w-[90%] flex flex-col items-center space-y-2">
        {/* Иконка поиска */}
        <button onClick={() => setSearchExpanded(true)} className="flex justify-center items-center">
          <FaSearch size={24} className="text-white" />
        </button>

        {/* Поле ввода (повёрнуто на 90 градусов) */}
        <input
          type="text"
          placeholder="Поиск..."
          className="w-[5vh] h-[80%] bg-gray-700 text-white text-sm px-2 py-1 rounded-md transform rotate-90 origin-center"
          onClick={() => setSearchExpanded(true)} // Открывает полноэкранный поиск
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
  );
};

export default Sidebar;

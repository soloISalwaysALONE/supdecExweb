import { FaHeart } from 'react-icons/fa';

const Filters = () => (
  <div className="fixed top-0 left-20 right-0 z-20 bg-orange-100 shadow-md py-2 px-4 flex justify-evenly items-center">
    <button className="border p-2 text-gray-700 hover:text-blue-700">Цена</button>
    <button className="border p-2 text-gray-700 hover:text-blue-700">Материал</button>
    <button className="border p-2 text-gray-700 hover:text-blue-700">Цвет</button>
    <button className="border p-2 text-gray-700 hover:text-blue-700">
      <FaHeart />
    </button>
  </div>
);

export default Filters;

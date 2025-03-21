import React from 'react';
import ProductCard from './ProductCard';

const ProductCatalog = ({ hoveredProduct, setHoveredProduct }) => (
  //<div className="grid grid-cols-4 gap-4 w-full auto-rows-auto max-w-[100%] flex-grow h-full min-h-screen px-4">
  <div className="grid grid-cols-4 gap-2 pt-20 px-4   w-full max-w-[90%] auto-rows-auto">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
      <ProductCard
        key={id}
        id={id}
        hoveredProduct={hoveredProduct}
        setHoveredProduct={setHoveredProduct}
      />
    ))}
  </div>
);

export default ProductCatalog;

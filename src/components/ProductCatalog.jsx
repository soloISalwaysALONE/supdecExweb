import React from 'react';
import ProductCard from './ProductCard';

const ProductCatalog = ({ hoveredProduct, setHoveredProduct }) => (
    <div className="grid grid-cols-4 gap-4 w-[80%] auto-rows-auto">
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

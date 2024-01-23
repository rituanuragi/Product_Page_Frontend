// src/components/MoreProducts/MoreProducts.jsx

import React from 'react';
import PricingCard from '../PricingCard/PricingCard'; // Import PricingCard to use for displaying products
import { Link } from 'react-router-dom';

// More products data array (similar structure to your pricingPlans array)
const moreProducts = [
  // ... define more products here
];

function MoreProducts() {
  return (
    <div>
      <h1>More Products</h1>
      {/* Loop through more products and display them */}
      {moreProducts.map((product, index) => (
        <PricingCard
          key={index}
          id={product.id}
          title={product.title}
          price={product.price}
          features={product.features}
          isMostPopular={product.isMostPopular}
        />
      ))}
      <Link to="/">Back to Main Page</Link>
    </div>
  );
}

export default MoreProducts;

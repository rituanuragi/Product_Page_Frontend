import React from 'react';
import './PricingCard.css';

function PricingCard({ id, title, price, features, isMostPopular }) {
  const paddedId = `#${String(id).padStart(3, '0')}`; // Adjusted to 3 digits as per your example

  return (
    <div className={`pricing-card ${isMostPopular ? 'popular' : ''}`}>
      {isMostPopular && <div className="ribbon">Most Popular</div>}
      <div className="card-header">
        <div className="card-id">{paddedId}</div> {/* Display the padded ID here */}
        <h2>{title}</h2>
        <p className="price">{price}</p>
      </div>
      
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index} className={feature.available ? 'included' : 'excluded'}>
            {feature.available ? '✓' : '✕'} {feature.text}
          </li>
        ))}
      </ul>
      <button className="get-started">Get started</button>
    </div>
  );
}

export default PricingCard;

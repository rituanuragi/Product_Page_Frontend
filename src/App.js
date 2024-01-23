// src/App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import PricingCard from './components/PricingCard/PricingCard';
import Header from './components/Header/Header';
import MoreProducts from './components/MoreProducts/MoreProducts'; // Make sure to import MoreProducts
import './App.css';

function App() {
  const pricingPlans = [
    {
      id:'1',
      title: 'Free',
      price: '₹0.00',
      features: [
        { text: 'Complimentary 15 Minutes Call with our Financial Experts', available: true },
        { text: 'Unlimited Access', available: true },
        { text: 'In-depth financial planning', available: true },
        { text: 'Investment strategies', available: true },
        { text: '1 Free live sessions', available: true },
        { text: 'Debt management', available: true },
        { text: 'Retirement planning', available: false },
        { text: 'Tax optimization', available: false },
        { text: '1-Year Membership Plan', available: false },
        { text: "Personalized Financial offering's", available: false },
        { text: '24/7 Priority Support', available: false },
      ],
      isMostPopular: false
    },
    {
      id:2,
      title: 'Plus',
      price: '₹699.00',
      features: [
        { text: 'Financial Explorer All FinSavvy Lite Features,Plus:', available: true },
        { text: 'Unlimited Access', available: true },
        { text: 'In-depth financial planning', available: true },
        { text: 'Investment strategies', available: true },
        { text: '5 Free live sessions', available: true },
        { text: 'Debt management', available: true },
        { text: 'Retirement planning', available: false },
        { text: 'Tax optimization', available: false },
        { text: '1-Year Membership Plan', available: false },
        { text: "Personalized Financial offering's", available: false },
        { text: '24/7 Priority Support', available: false },
      ],
      isMostPopular: true // Assuming the Plus plan is the most popular
    },
    {
      id:3,
      title: 'Pro',
      price: '₹999.00',
      features: [
        { text: 'Top Financial Transformation:All FinSavvy Plus Features, Plus: ', available: true },
        { text: 'Unlimited Access', available: true },
        { text: 'In-depth financial planning', available: true },
        { text: 'Investment strategies', available: true },
        { text: 'Unlimited live sessions', available: true },
        { text: 'Debt management', available: true },
        { text: 'Retirement planning', available: false },
        { text: 'Tax optimization', available: false },
        { text: '1-Year Membership Plan', available: false },
        { text: "Personalized Financial offering's", available: false },
        { text: '24/7 Priority Support', available: false },
      ],
      isMostPopular: false
    },
    // Add other plans like 'Pro' here...
  ];

 
    return (
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={
              <>
                <div className="pricing-container">
                  {pricingPlans.map((plan, index) => (
                    <PricingCard
                      key={index}
                      id={plan.id}
                      title={plan.title}
                      price={plan.price}
                      features={plan.features}
                      isMostPopular={plan.isMostPopular}
                    />
                  ))}
                </div>
                <div style={{alignItems: 'flex-end'}}>
                  <Link to="/more-products" className="next-page-link">Next Page for More Products</Link>
                 
                </div>
              </>
            }
          />
          <Route path="/more-products" element={<MoreProducts />} />
        </Routes>
      </div>
      </Router>
    );
  }

export default App;

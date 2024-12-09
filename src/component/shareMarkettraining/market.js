import React from 'react';
import './market.css';
import { Link } from 'react-router-dom';

const StockMarketTraining = () => {
  return (
    <div className="training-container-1">
      <div className="training-header">
        Stock Market Training Workshop
      </div>

      <div className="training-stage">
        <h2>Stage - 1</h2>
        <ul className="training-list">
          <li>Introduction to the stock market (Correlation with Real Life Business)</li>
          <li>Fundamental analysis (Market Capitalisation, PE, EPS, BS, P&L)</li>
          <li>Technical analysis (Candles, Moving Average & RSI)</li>
          <li>Understanding a 'SHARE' before making investments</li>
          <li>The Process of making investments in shares</li>
          <li>How to avoid wrong entries</li>
          <li>Wealth creation via Investment Strategies (Direct & Mutual Fund)</li>
          <li>Practical exercises with case studies</li>
          <li>Investment psychology & Risk management</li>
          <li>Market research tools and resources</li>
        </ul>
        <p className="training-fee">
          Course Fee: Rs 4000 (Online) | Rs 5500 + Hall Charge (Offline)
        </p>
        <Link to="/contact-us">
            <button className="stock-training-button">Enroll Now</button>
          </Link>      </div>

         <br/>
      <div className="training-stage">
          <h2>Stage - 2</h2>
          <ul  className="training-list">
            <li>Introduction to Derivative Market (F&O Trading)</li>
            <li>Real Market Explanation of Future, Call & Put</li>
            <li>High Earning Strategies with Limited Risk (Hedging Method)</li>
            <li>Option Trading Strategies</li>
            <li>Fixed Income Strategies (Weekly, Monthly, Quarterly)</li>
            <li>Live Trading Exposure (6 months)</li>
          </ul>
          <p className="training-fee">Course Fee: Rs 35000 (Online)</p>
          <Link to="/contact-us">
            <button className="stock-training-button">Enroll Now</button>
          </Link>
        </div>
    </div>
  );
};

export default StockMarketTraining;

import React from "react";
import { Link } from "react-router-dom";

import Navbar from './Navbar';
import Footer from './Footer';
import "./PayOption.css";

const PayOption = () => {
  return (
    <div>
    <Navbar />
    
    <div className="card-container">
      <h2 className="card-title">Choose How to Receive Funds</h2>
      <div className="card-box">
        <div className="card-item">
          <span className="preferred-label">preferred <i>(Includes a $7 processing fee)</i></span>
          <Link to="/credit-card" className="card-button-link">
            <button className="card-button preferred">
              <div className="button-title">Credit Card Account</div>
              <div className="button-description">
                Double Disbursement $6800 × 2
              </div>
              {/* <div className="button-description">
                <p>Processing Fee of $7</p>
              </div> */}
            </button>
          </Link>
        </div>
        <div className="card-item">
          <Link to="/bank-account" className="card-button-link">
            <button className="card-button">
              <div className="button-title">Checking or Savings Account</div>
              <div className="button-description">
                Single Disbursement $6200
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default PayOption;

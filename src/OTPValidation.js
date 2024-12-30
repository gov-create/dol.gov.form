import React from 'react';
// import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';


const OTPValidation = () => {

  // const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      {/* <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-6 mt-3">
          <h2 className="mt-5">Account Verification</h2>
        </div>
      </div> */}
      <div class="d-flex justify-content-center align-items-center vh-100">
        <h3 className='text-center'>Your information is currently being processed. You will be contacted shortly</h3>
    </div>
      <Footer />
    </div>
  );
};

export default OTPValidation;
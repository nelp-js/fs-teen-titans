import React from "react";
import { useNavigate } from "react-router-dom";
import bg3 from "../assets/images/robinbg.jpg";
import errorImage from "../assets/images/error1.png";
import './error.css';

function Error() {

  return (
            <div
          className="d-flex align-items-center vh-100"
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
        
    <div className="container mt-5">
      <img 
        src={errorImage} 
        alt="Page Not Found" 
        className="img-fluid mx-auto d-block mt-0 transparent-image"
        style={{ maxWidth: "400px" }} 
      />
      <p className="lead text-center mb-5">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="lead text-center mb-5">Go back to the <a href="/home">homepage</a>.</p>
    </div>
    </div>
  );
}

export default Error;
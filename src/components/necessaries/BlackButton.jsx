import React from "react";
import './css/blackButton.css';

const BlackButton = () => {
    return (
        <a href="/" className="black__button">
            <div className="black__button__container">
                <i className="fa-solid fa-square-arrow-up-right" style={{ fontSize: '25px' }}></i>
                <span>Contact With Us</span>
            </div>
        </a>
    );
};

export default BlackButton;

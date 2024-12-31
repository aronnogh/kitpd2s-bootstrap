import React from 'react';
import './navHeader.css';
import BlackButton from '../necessaries/BlackButton';
import CursorTyped from '../necessaries/CursorTyped';

const NavHeader = () => {
  return (
    <div className="nav_container container bg-transparent border border-dark w-100 my-5">
      <div className="row">
        <div className="col-auto">
          <div className="logo_container d-flex align-items-center justify-content-center px-4 py-2">
            <div className="logo me-3"></div>
            <span className="fw-bold fs-5">KITPD2S</span>
          </div>
        </div>
        <div className="col text-center typo_container">
          <div className="my-2">The Society from Mechanical Engineering</div>
          <hr className="my-2" />
          <div id="navBar-animation">
            <CursorTyped />
          </div>
        </div>
        <div className="col-auto ms-auto">
          <BlackButton />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;

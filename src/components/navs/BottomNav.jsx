import React, { useState } from 'react';
import { motion } from "framer-motion";
import './bottomNav.css';
import NavSubMenu from './NavSubMenu';

const BottomNav = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  const menuItems = ['About', 'Projects', 'Gallery'];

  return (
    <>
    <div className="menu_container container border border-dark w-100 my-5">
      {/* left social links */}
      <div className="left__social">
        <a href="#" className="single_social__container">
          <i className="fa-brands fa-instagram"></i>
          <span>Instagram</span>
        </a>

        <a href="#" className="single_social__container">
          <i className="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>

        <a href="#" className="single_social__container">
          <i className="fa-brands fa-x-twitter"></i>
          <span>X(Twitter)</span>
        </a>

        <a href="#" className="single_social__container">
          <i className="fa-brands fa-youtube"></i>
          <span>YouTube</span>
        </a>
      </div>     

      {/* right menu links */}
      <div className="right__menus">
        <div className="right_container_menu">
          <a href="#">Home</a>
          {menuItems.map((menu, index) => (
            <motion.div
              className={`single_menu__container subMenu-button ${activeSubMenu === menu ? 'active' : ''}`}
              key={index}
              onClick={() => toggleSubMenu(menu)}
            >
              <span>{menu}</span>
              <motion.i
                className="fa-solid fa-circle-chevron-up"
                animate={{
                  rotate: activeSubMenu === menu ? 180 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            </motion.div>
          ))}

          <a href="#">News</a>
          
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>

    <motion.div
      className="nav-sub-menu-container container"
      animate={activeSubMenu ? "slideInRight" : "slideInLeft"}
      variants={{
        slideInRight: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
          },
        },
        slideInLeft: {
          x: "-100%",
          opacity: 0,
          transition: {
            duration: 0.8,
          },
        },
      }}
    >
      <NavSubMenu activeCategory={activeSubMenu} />
    </motion.div>
    </>
  );
};

export default BottomNav;
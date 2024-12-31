import React from 'react';
import './navSubMenu.css';

const coverImgData = {
  About: [
    {
      id: 0,
      img__url: './navMenu/hm.jpg',
      base__text: 'History and Mission',
      to__url: '#'
    },
    {
      id: 1,
      img__url: './navMenu/app.jpg',
      base__text: 'Achievement & Past Projects',
      to__url: '#'
    },
    {
      id: 2,
      img__url: './navMenu/fm.jpg',
      base__text: 'Faculty & Members',
      to__url: '#'
    }
  ],
  Projects: [
    {
      id: 0,
      img__url: './navMenu/oc.jpg',
      base__text: 'Ongoing and Completed',
      to__url: '#'
    },
    {
      id: 1,
      img__url: './navMenu/jfu.jpg',
      base__text: 'Journals From Us',
      to__url: '#'
    }
  ],
  Gallery: [
    {
      id: 0,
      img__url: './navMenu/p.jpg',
      base__text: 'Photos',
      to__url: '#'
    },
    {
      id: 1,
      img__url: './navMenu/v.jpg',
      base__text: 'Videos',
      to__url: '#'
    }
  ]
};

const NavSubMenu = ({ activeCategory }) => {
  if (!activeCategory) return null;

  return (
    <div className="nav-sub-menu-container container">
      <div className="row">
        {coverImgData[activeCategory].map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100">
              <div className="card-img-top">
                <img src={item.img__url} className="card-img" alt={item.base__text} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.base__text}</h5>
                <a href={item.to__url} className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavSubMenu;
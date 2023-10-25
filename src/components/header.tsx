import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import '../styles/header.css';
const Header = ({ shoppingBagPreviewProps: { onClick } }: any) => {
  const [isActive, setActiveBurger] = useState(false);
  const active = isActive ? 'is-active' : '';
  const handleActive = () => setActiveBurger(!isActive);
  const handleShoppingBag = () => {
    onClick();
    handleActive();
  };
  return (
    <nav className="navbar is-dark is-fixed-top">
      <header>
        <a href="/" title="Return to the homepage" id="logo">
          <StaticImage
            id="logo"
            objectFit={'contain'}
            height={130}
            src="../images/logo-with-text.png"
            alt="Best For You logo"
          />
        </a>
      </header>
      <div className="container cart-badge">
        <div className={`navbar-menu ${active}`}>
          <div className="navbar-end">
            <button
              onClick={() => {
                handleShoppingBag();
              }}
            >
              <a
                className="navbar-item"
                id="shopping-bag-toggle"
                onClick={onClick}
              >
                <span
                  className="clayer-shopping-bag-items-count tag is-warning is-rounded"
                  id="shopping-bag-preview-count"
                >
                  0
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

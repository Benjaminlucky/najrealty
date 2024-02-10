import React, { useState } from 'react';
import './header.css';
import logo from '../../images/najLogo.svg';
import { links } from '../../data';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

function Header() {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <div className="main__nav-con nav__container">
      <div className="nav__content">
        <div className="nav__logo">
          <Link to="/" onClick={() => setIsNavShowing(prev => !prev)} className="nav-logo">
            <img src={logo} alt="Dunu Logo" />
          </Link>
        </div>

        <div className="nav__menu">
          <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            {links.map(({ name, path }, index) => {
              const isInspectionLink = path.includes('inspection');

              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    style={({isActive})=>({ color: isActive ? "var(--color-secondary)": '', fontWeight: isActive ? 700 : "" })}
                    className={`nav-link ${isInspectionLink ? 'inspectionButton' : 'linkText'}`}
                    onClick={() => setIsNavShowing(prev => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </div>
  );
}

export default Header;

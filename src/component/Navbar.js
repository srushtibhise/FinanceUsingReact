import React from 'react';
import { Link } from 'react-router-dom';
import e9 from '../assets/e9.png';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'black',
  color: 'white',
  padding: '10px',
};



const menuStyle = {
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  transition: 'color 0.3s',  
};

const activeLinkStyle = {
  color: 'orange', 
};

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <div>
        <img src={e9} alt='Equip9 Logo' />
      </div>
      <div style={menuStyle}>
        <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>Home</Link>
        <Link to="/about" style={linkStyle} activeStyle={activeLinkStyle}>About</Link>
        <Link to="/finance" style={linkStyle} activeStyle={activeLinkStyle}>Finance</Link>
      </div>
    </div>
  );
};

export default Navbar;

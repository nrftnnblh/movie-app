import React from 'react';
import ReactDOM from 'react-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/movie' activeStyle>
            Movies
          </NavLink>
          <NavLink to='/tv' activeStyle>
            TV Show
          </NavLink>
          <NavLink to='/video' activeStyle>
            Videos
          </NavLink>
          <NavLink to='/faq' activeStyle>
            FAQ
          </NavLink>
		  <NavLink to='pricing' activeStyle>
			Pricing
		  </NavLink>
		  <NavLink to='contactus' activeStyle>
			Contact Us
		  </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;




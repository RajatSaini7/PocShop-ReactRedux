import React from 'react';
import SearchBox from '../SearchBox/SearchBoxComponent';
import CartHeader from '../CardHeader/CardHeaderComponent';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #666666;
  background-color: #fff;
  background-size: cover;
  box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
`;

const NavLink = styled.a`
  font-family: Arial;
  font-size: 44px !important;
  color: #6f6f6f;
  font-weight: 400;
  text-decoration: none solid rgb(111, 111, 111);
`;

const CollapseNav = styled.div`
  justify-content: flex-end;
`;

const HeaderComponent = () => {

  return (
    <header data-test="Header-Component">
      <Nav className="navbar navbar-expand-lg navbar-light">
        <NavLink data-test="Heading" className="navbar-brand" href="#">Poc Shop</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <CollapseNav className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <SearchBox />
            <CartHeader />
          </form>
        </CollapseNav>
      </Nav>
    </header>
  );

}

export default HeaderComponent;

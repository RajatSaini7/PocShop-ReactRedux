import React from 'react';
import './HeaderComponent.css';
import SearchBox from '../SearchBox/SearchBoxComponent';
import CartHeader from '../CardHeader/CardHeaderComponent';

const HeaderComponent = () => {

  return (
    <header>
      <nav className="header navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand heading_link" href="#">Poc Shop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse formAlign" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <SearchBox />
            <CartHeader />
          </form>
        </div>
      </nav>
    </header>
  );

}

export default HeaderComponent;

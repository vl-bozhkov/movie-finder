import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-center p-3 jumbotron">
      <Link className="header-link" to="/">
        <ion-icon size="large" name="desktop" />
        <h1 className="d-inline ml-2 ">Movie DB</h1>
      </Link>
    </div>
  );
};

export default Header;

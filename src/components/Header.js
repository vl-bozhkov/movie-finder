import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-center app-header py-2 ">
      <Link className="header-link" to="/">
        <ion-icon size="large" name="desktop" />
        <h1 className="d-inline ml-2 ">Movie DB</h1>
      </Link>
    </div>
  );
};

export default Header;

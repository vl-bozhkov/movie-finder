import React from 'react';

const Footer = () => {
  return (
    <footer className="footer py-3 mt-0 ">
      <div className="container text-white">
        <span className="text-muted">
          <a
            href="https://github.com/vl-bozhkov"
            target="_blank"
            className="icon-grid mx-2"
          >
            <ion-icon size="large" name="logo-github" />
          </a>
          <a
            href="https://codepen.io/vladi_bozhkov/"
            target="_blank"
            className="icon-grid mx-2"
          >
            <ion-icon size="large" name="logo-codepen" />
          </a>
          <a
            href="https://vl-bozhkov.github.io/portfolio/"
            target="_blank"
            className="icon-grid mx-2"
          >
            <ion-icon size="large" name="globe" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

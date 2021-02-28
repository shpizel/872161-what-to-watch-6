import React from "react";
import Logo from "./logo";
import Copyright from "./copyright";


const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo modifier={`logo__link--light`}/>
      <Copyright/>
    </footer>
  );
};

export default Footer;

import React from "react";
import Logo from "./logo";
import Copyright from "./copyright";


const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer">
        <Logo modifier={`logo__link--light`}/>
        <Copyright/>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

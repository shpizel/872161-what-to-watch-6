import React from "react";

import Logo from "./logo";
import Copyright from "./copyright";


const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo light={true}/>
      <Copyright/>
    </footer>
  );
};

export default Footer;

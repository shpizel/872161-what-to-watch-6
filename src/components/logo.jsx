import React from "react";
import PropTypes from "prop-types";


const Logo = ({light = false}) => {
  return (
    <div className="logo">
      <a className={`logo__link ${(light) ? `logo__link--light` : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  light: PropTypes.bool
};

export default Logo;

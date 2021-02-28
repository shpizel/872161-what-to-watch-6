import React from "react";
import PropTypes from "prop-types";


const Logo = (props) => {
  const {modifier = ``} = props;
  return (
    <div className="logo">
      <a className={`logo__link ${modifier}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  modifier: PropTypes.string
};

export default Logo;

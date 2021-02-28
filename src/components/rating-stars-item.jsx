import React from "react";
import PropTypes from "prop-types";


const RatingStarsItem = (props) => {
  const {value, checked = false} = props;
  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} defaultChecked={checked} />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </React.Fragment>
  );
};

RatingStarsItem.propTypes = {
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool,
};

export default RatingStarsItem;

import React from "react";
import PropTypes from "prop-types";

import RatingStarsItem from "./rating-stars-item";


const RatingStars = (props) => {
  const {count, currentValue} = props;
  const range = [...Array(count).keys()].map((i) => i + 1);
  return (
    <div className="rating__stars">
      {range.map((i) => <RatingStarsItem key={i + 1} value={i} checked={i <= currentValue}/>)}
    </div>
  );
};

RatingStars.propTypes = {
  count: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired,
};

export default RatingStars;

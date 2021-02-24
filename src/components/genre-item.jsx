import React from "react";
import PropTypes from "prop-types";

export const GenreItem = (props) => {
  const {genre, isActive} = props;
  return <li className={`catalog__genres-item ${(isActive) ? ` catalog__genres-item--active` : ``}`}>
    <a href="#" className="catalog__genres-link">{genre}</a>
  </li>;
};

GenreItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

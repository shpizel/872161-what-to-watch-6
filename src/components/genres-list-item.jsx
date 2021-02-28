import React from "react";
import PropTypes from "prop-types";


const GenresListItem = (props) => {
  const {genre, isActive} = props;
  return (
    <li className={`catalog__genres-item ${(isActive) ? ` catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
};

GenresListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default GenresListItem;

import React from "react";
import PropTypes from "prop-types";


const GenresList = ({genres}) => {
  return !!genres && (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li key={i + 1} className={`catalog__genres-item ${(!i) ? ` catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default GenresList;

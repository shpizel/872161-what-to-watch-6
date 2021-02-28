import React from "react";
import PropTypes from "prop-types";

import GenresListItem from "./genres-list-item";


const GenresList = (props) => {
  const {genres} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => <GenresListItem key={i + 1} genre={genre} isActive={!i}/>)}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenresList;

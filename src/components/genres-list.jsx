import React from "react";
import PropTypes from "prop-types";

import GenreItem from "./genre-item";


const GenresList = (props) => {
  const {genres} = props;
  return <ul className="catalog__genres-list">
    {genres.map((genre, i) => <GenreItem key={i + 1} genre={genre} isActive={!i}/>)}
  </ul>;
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenresList;

import React from "react";
import PropTypes from "prop-types";

import GenresList from "./genres-list";
import MoviesList from "./movie/movies-list";
import {filmShape} from "../validators/film";


const Catalog = ({genres, films, noShowMoreButton = true}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList genres={genres}/>
      <MoviesList films={films} noShowMoreButton={noShowMoreButton}/>
    </section>
  );
};

Catalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(filmShape).isRequired,
  noShowMoreButton: PropTypes.bool,
};

export default Catalog;

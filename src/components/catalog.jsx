import React from "react";
import PropTypes from "prop-types";
import {GenresList} from "./genres-list";
import {MoviesList} from "./movies-list";

export const Catalog = (props) => {
  const {genres, films} = props;
  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <GenresList genres={genres}/>
    <MoviesList films={films}/>
  </section>;
};

Catalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

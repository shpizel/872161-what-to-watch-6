import React from "react";
import PropTypes from "prop-types";

import GenresList from "./genres-list";
import MoviesList from "./movies-list";
import {filmShape} from "../validators/film";


const Catalog = (props) => {
  const {genres = [], films, noShowMoreButton = false, modifier = ``, title = `Catalog`, hideTitle = true} = props;
  return (
    <React.Fragment>
      <section className={`catalog ${modifier}`}>
        <h2 className={`catalog__title ${(hideTitle) ? ` visually-hidden` : ``}`}>{title}</h2>
        {(genres.length > 0) ? <GenresList genres={genres}/> : ``}
        <MoviesList films={films} noShowMoreButton={noShowMoreButton}/>
      </section>
    </React.Fragment>
  );
};

Catalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(filmShape).isRequired,
  noShowMoreButton: PropTypes.bool,
  modifier: PropTypes.string,
  title: PropTypes.string,
  hideTitle: PropTypes.bool
};

export default Catalog;

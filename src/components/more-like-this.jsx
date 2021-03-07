import React from "react";
import PropTypes from "prop-types";

import MoviesList from "./movie/movies-list";
import {filmShape} from "../validators/film";
import {SHOW_MORE_FILMS_COUNT} from "../consts";


const MoreLikeThis = ({films}) => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList films={films.slice(0, SHOW_MORE_FILMS_COUNT)} noShowMoreButton={true}/>
    </section>
  );
};

MoreLikeThis.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired,
};

export default MoreLikeThis;

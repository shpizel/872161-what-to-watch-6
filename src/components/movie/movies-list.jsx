import React from "react";
import PropTypes from "prop-types";

import ShowMoreButton from "../show-more-button";
import {filmShape} from "../../validators/film";
import {getRandomFilmId} from "../../utils/film";


const MoviesList = ({films, noShowMoreButton}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <article key={i + 1} className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src={film.image} alt={film.name} width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href={`/films/${getRandomFilmId()}`}>{film.name}</a>
            </h3>
          </article>
        ))}
      </div>
      {(!noShowMoreButton) ? <ShowMoreButton/> : null}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired,
  noShowMoreButton: PropTypes.bool
};

export default MoviesList;

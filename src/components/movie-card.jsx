import React from "react";
import PropTypes from "prop-types";
import {Header} from "./header";

export const MovieCard = (props) => {
  const {activeFilm} = props;
  return <section className="movie-card">
    <div className="movie-card__bg">
      <img src={activeFilm.background} alt={name}/>
    </div>
    <h1 className="visually-hidden">WTW</h1>
    <Header/>
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={activeFilm.poster} alt={`${activeFilm.name} poster`} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{activeFilm.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{activeFilm.genre}</span>
            <span className="movie-card__year">{activeFilm.year}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

MovieCard.propTypes = {
  activeFilm: PropTypes.shape({
    background: PropTypes.string,
    name: PropTypes.string,
    poster: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number
  }).isRequired
};

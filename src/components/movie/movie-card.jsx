import React from "react";

import MovieCardHeader from "./movie-card-header";
import {activeFilmShape} from "../../validators/active-film";


const MovieCard = ({activeFilm}) => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={activeFilm.background} alt={name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <MovieCardHeader/>
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
    </section>
  );
};

MovieCard.propTypes = {
  activeFilm: activeFilmShape.isRequired
};

export default MovieCard;

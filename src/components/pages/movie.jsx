import React from "react";
import PropTypes from "prop-types";

import Footer from "../footer";
import MovieCardHeader from "../movie/movie-card-header";
import MovieDescription from "../movie/movie-description";
import MovieReviews from "../movie/movie-reviews";
import MovieNavigation from "../movie/movie-navigation";
import MoreLikeThis from "../more-like-this";
import {activeFilmShape} from "../../validators/active-film";
import {filmShape} from "../../validators/film";
import {MovieTab} from "../../consts";
import MovieRating from "../movie/movie-rating";


const Movie = ({filmId, activeFilm, films, activeTab}) => {
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={activeFilm.background} alt={activeFilm.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <MovieCardHeader/>
          <div className="movie-card__wrap">
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
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href={`/films/${filmId}/review`} className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={activeFilm.poster} alt={`${activeFilm.name} poster`} width="218" height="327"/>
            </div>
            <div className="movie-card__desc">
              <MovieNavigation activeTab={activeTab}/>
              <MovieRating activeFilm={activeFilm}/>
              <MovieReviews activeFilm={activeFilm}/>
              <MovieDescription activeFilm={activeFilm}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis films={films}/>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

Movie.propTypes = {
  filmId: PropTypes.number.isRequired,
  activeFilm: activeFilmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  activeTab: PropTypes.oneOf(Object.values(MovieTab)),
};

export default Movie;

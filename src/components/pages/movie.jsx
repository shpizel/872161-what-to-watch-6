import React from "react";
import PropTypes from "prop-types";

import Footer from "../footer";
import Catalog from "../catalog";
import Header from "../header";
import {activeFilmShape} from "../../validators/active-film";
import MovieDescription from "../movie-description";
import {filmShape} from "../../validators/film";
import MovieRating from "../movie-reviews";
import MovieNavigation from "../movie-navigation";
import {movieTabs} from "../../validators/movie-tabs";


const Movie = (props) => {
  const {activeFilm, films, activeTab} = props;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={activeFilm.background} alt={activeFilm.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
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
              <MovieDescription activeFilm={activeFilm}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog hideTitle={false} title={`More like this`} noShowMoreButton={true} films={films.slice(3)}/>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

Movie.propTypes = {
  activeFilm: activeFilmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  activeTab: PropTypes.oneOf(movieTabs),
};

export default Movie;

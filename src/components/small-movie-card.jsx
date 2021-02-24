import React from "react";
import PropTypes from 'prop-types';

export const SmallMovieCard = (props) => {
  const {film} = props;
  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={film.image} alt={film.name} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
};

import React from "react";

import {activeFilmShape} from "../../validators/active-film";
import {humanizeRating} from "../../utils/film";


const MovieRating = ({activeFilm}) => {
  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{activeFilm.rating.toString().replace(`.`, `,`)}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{humanizeRating(activeFilm.rating)}</span>
        <span className="movie-rating__count">{activeFilm.ratings.length} ratings</span>
      </p>
    </div>
  );
};

MovieRating.propTypes = {
  activeFilm: activeFilmShape.isRequired,
};

export default MovieRating;

import React from "react";

import {activeFilmShape} from "../validators/active-film";
import {humanizeRating} from "../utils/film";


const MovieDescription = (props) => {
  const {activeFilm} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{activeFilm.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{humanizeRating(activeFilm.rating)}</span>
          <span className="movie-rating__count">{activeFilm.ratings.length} ratings</span>
        </p>
      </div>
    </React.Fragment>
  );
};

MovieDescription.propTypes = {
  activeFilm: activeFilmShape.isRequired,
};

export default MovieDescription;

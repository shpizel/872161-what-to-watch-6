import React from "react";

import {activeFilmShape} from "../validators/active-film";


const MovieDetails = (props) => {
  const {activeFilm} = props;

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{activeFilm.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span
              className="movie-card__details-value"
              dangerouslySetInnerHTML={activeFilm.starring.map((actor) => `${actor}<br/>`).join(``)}
            />
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">1h 39m</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{activeFilm.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{activeFilm.year}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

MovieDetails.propTypes = {
  activeFilm: activeFilmShape.isRequired,
};

export default MovieDetails;

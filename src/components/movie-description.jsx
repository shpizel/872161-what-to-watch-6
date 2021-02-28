import React from "react";

import {activeFilmShape} from "../validators/active-film";


const MovieDescription = (props) => {
  const {activeFilm} = props;

  return (
    <React.Fragment>
      <div className="movie-card__text">
        {activeFilm.description.map((text, i) => <p key={i + 1}>{text}</p>)}
        <p className="movie-card__director"><strong>Director: {activeFilm.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {activeFilm.starring.slice(4).join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieDescription.propTypes = {
  activeFilm: activeFilmShape.isRequired,
};

export default MovieDescription;

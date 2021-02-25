import React from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "./small-movie-card";
import ShowMoreButton from "./show-more-button";
import {filmShape} from "../validators/film";


const MoviesList = (props) => {
  const {films} = props;
  return <React.Fragment>
    <div className="catalog__movies-list">
      {films.map((film, i) => <SmallMovieCard key={i + 1} film={film} />)}
    </div>
    <ShowMoreButton/>
  </React.Fragment>;
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired
};

export default MoviesList;

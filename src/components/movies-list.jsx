import React from "react";
import PropTypes from "prop-types";
import {SmallMovieCard} from "./small-movie-card";
import {ShowMoreButton} from "./show-more-button";

export const MoviesList = (props) => {
  const {films} = props;
  return <React.Fragment>
    <div className="catalog__movies-list">
      {films.map((film, i) => <SmallMovieCard key={i + 1} film={film} />)}
    </div>
    <ShowMoreButton/>
  </React.Fragment>;
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

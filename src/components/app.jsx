import React from "react";
import {MovieCard} from "./movie-card";
import PropTypes from "prop-types";
import {Footer} from "./footer";
import {Catalog} from "./catalog";

export const App = (props) => {
  const {activeFilm, films, genres} = props;
  return <React.Fragment>
    <MovieCard activeFilm={activeFilm}/>
    <div className="page-content">
      <Catalog genres={genres} films={films}/>
      <Footer/>
    </div>
  </React.Fragment>;
};

App.propTypes = {
  activeFilm: PropTypes.shape({
    background: PropTypes.string,
    name: PropTypes.string,
    poster: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  })).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

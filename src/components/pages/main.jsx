import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../movie/movie-card";
import Catalog from "../catalog";
import Footer from "../footer";
import {activeFilmShape} from "../../validators/active-film";
import {filmShape} from "../../validators/film";


const Main = ({activeFilm, films, genres}) => {
  return (
    <React.Fragment>
      <MovieCard activeFilm={activeFilm}/>
      <div className="page-content">
        <Catalog genres={genres} films={films}/>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  activeFilm: activeFilmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Main;

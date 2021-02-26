import React from "react";
import PropTypes from "prop-types";

import Main from "./main";
import {activeFilmShape} from "../validators/active-film";
import {filmShape} from "../validators/film";


const App = (props) => {
  const {activeFilm, films, genres} = props;
  return <Main activeFilm={activeFilm} genres={genres} films={films}/>;
};

App.propTypes = {
  activeFilm: activeFilmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

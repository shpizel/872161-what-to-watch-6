import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app";
import {films} from "./mocks/films";
import {genres} from "./mocks/genres";
import {activeFilm} from "./mocks/active-film";

ReactDOM.render(<App activeFilm={activeFilm} genres={genres} films={films}/>, document.getElementById(`root`));

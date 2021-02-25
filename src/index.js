import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import {films} from "./mocks/films";
import {genres} from "./mocks/genres";
import {activeFilm} from "./mocks/active-film";


const root = document.getElementById(`root`);
const app = <App activeFilm={activeFilm} genres={genres} films={films}/>;

ReactDOM.render(app, root);

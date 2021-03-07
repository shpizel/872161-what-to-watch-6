import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import {films} from "./mocks/films";
import {genres} from "./mocks/genres";
import {activeFilm} from "./mocks/active-film";
import {ROOT_NODE_NAME} from "./consts";


const root = document.getElementById(ROOT_NODE_NAME);
const app = <App activeFilm={activeFilm} genres={genres} films={films}/>;

ReactDOM.render(app, root);

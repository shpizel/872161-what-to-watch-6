import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import Main from "./pages/main";
import Movie from "./pages/movie";
import SignIn from "./pages/sign-in";
import MyList from "./pages/my-list";
import AddReview from "./pages/add-review";
import Player from "./pages/player";
import {activeFilmShape} from "../validators/active-film";
import {filmShape} from "../validators/film";


const App = ({activeFilm, films, genres}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main activeFilm={activeFilm} genres={genres} films={films}/>
        </Route>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/films/:id" render={({match: {params: {id: filmId}}}) => (
          <Movie filmId={parseInt(filmId, 10)} activeFilm={activeFilm} films={films}/>
        )}
        />
        <Route exact path="/films/:id/review" render={({match: {params: {id: filmId}}}) => (
          <AddReview filmId={parseInt(filmId, 10)} activeFilm={activeFilm}/>
        )}
        />
        <Route exact path="/player/:id" render={({match: {params: {id: filmId}}}) => (
          <Player filmId={parseInt(filmId, 10)} activeFilm={activeFilm}/>
        )}
        />
        <Route render={() => (
          <Fragment>
            <h1>
              404.
              <br />
              <small>Page not found</small>
            </h1>
            <Link to="/">Go to main page</Link>
          </Fragment>
        )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  activeFilm: activeFilmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

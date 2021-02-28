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


const App = (props) => {
  const {activeFilm, films, genres} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main activeFilm={activeFilm} genres={genres} films={films}/>
        </Route>
        <Route path="/login" exact component={SignIn}/>
        <Route path="/mylist" exact>
          <MyList films={films}/>
        </Route>
        <Route path="/films/:id?" exact>
          <Movie activeFilm={activeFilm} films={films.slice(4)}/>
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview activeFilm={activeFilm}/>
        </Route>
        <Route path="/player/:id" exact>
          <Player activeFilm={activeFilm}/>
        </Route>
        <Route
          render={() => (
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

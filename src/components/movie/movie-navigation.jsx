import React from "react";
import PropTypes from "prop-types";

import {MovieTab} from "../../consts";
import {capitalize} from "../../utils/common";


const MovieNavigation = ({activeTab = MovieTab.OVERVIEW}) => {
  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(MovieTab).map((movieTab, i) => (
            <li key={i + 1} className={`movie-nav__item ${(activeTab === movieTab ? ` movie-nav__item--active` : ``)}`}>
              <a href="#" className="movie-nav__link">{capitalize(movieTab)}</a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

MovieNavigation.propTypes = {
  activeTab: PropTypes.oneOf(Object.values(MovieTab))
};

export default MovieNavigation;

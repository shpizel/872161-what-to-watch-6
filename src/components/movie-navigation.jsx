import React from "react";
import PropTypes from "prop-types";
import {movieTabs} from "../validators/movie-tabs";


const MovieNavigation = (props) => {
  const {activeTab = `overview`} = props;
  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${(activeTab === `overview` ? ` movie-nav__item--active` : ``)}`}>
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className={`movie-nav__item ${(activeTab === `details` ? ` movie-nav__item--active` : ``)}`}>
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className={`movie-nav__item ${(activeTab === `reviews` ? ` movie-nav__item--active` : ``)}`}>
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

MovieNavigation.propTypes = {
  activeTab: PropTypes.oneOf(movieTabs)
};

export default MovieNavigation;

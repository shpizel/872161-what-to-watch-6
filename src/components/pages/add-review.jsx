import React from "react";

import Logo from "../logo";
import RatingStars from "../rating/rating-stars";
import UserInfo from "../user-info";
import {activeFilmShape} from "../../validators/active-film";


const AddReview = ({activeFilm}) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={activeFilm.background} alt={activeFilm.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{activeFilm.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserInfo/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={activeFilm.poster} alt={`${activeFilm.name} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <RatingStars count={10} currentValue={1}/>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"/>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  activeFilm: activeFilmShape.isRequired,
};

export default AddReview;

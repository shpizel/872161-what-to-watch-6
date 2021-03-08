import React from "react";

import MovieReviewsItem from "./movie-reviews-item";
import {getRandomUserReview} from "../../mocks/reviews";


const MovieReviews = () => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <MovieReviewsItem userReview={getRandomUserReview()}/>
        <MovieReviewsItem userReview={getRandomUserReview()}/>
        <MovieReviewsItem userReview={getRandomUserReview()}/>
      </div>
      <div className="movie-card__reviews-col">
        <MovieReviewsItem userReview={getRandomUserReview()}/>
        <MovieReviewsItem userReview={getRandomUserReview()}/>
        <MovieReviewsItem userReview={getRandomUserReview()}/>
      </div>
    </div>
  );
};

export default MovieReviews;

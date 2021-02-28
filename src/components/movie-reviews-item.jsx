import React from "react";
import PropTypes from "prop-types";


const MovieReviewsItem = (props) => {
  const {text, author, rating} = props;

  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{text}</p>
          <footer className="review__details">
            <cite className="review__author">{author}</cite>
            <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
          </footer>
        </blockquote>
        <div className="review__rating">{rating}</div>
      </div>
    </React.Fragment>
  );
};

MovieReviewsItem.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default MovieReviewsItem;

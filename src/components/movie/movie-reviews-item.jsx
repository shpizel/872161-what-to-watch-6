import React from "react";
import dayjs from "dayjs";

import {userReviewShape} from "../../validators/user-review";


const MovieReviewsItem = ({userReview}) => {
  const {text, author, createdAt: createdAtRaw, rating} = userReview;
  const createdAt = dayjs(createdAtRaw);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time
            className="review__date"
            dateTime={createdAt.format(`YYYY-MM-DD`)}
          >{createdAt.format(`MMMM DD, YYYY`)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating.toString().replace(`.`, `,`)}</div>
    </div>
  );
};

MovieReviewsItem.propTypes = {
  userReview: userReviewShape.isRequired,
};

export default MovieReviewsItem;

import PropTypes from "prop-types";


export const userReviewShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
});

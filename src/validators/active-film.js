import PropTypes from "prop-types";


export const activeFilmShape = PropTypes.shape({
  background: PropTypes.string,
  name: PropTypes.string,
  poster: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number
});

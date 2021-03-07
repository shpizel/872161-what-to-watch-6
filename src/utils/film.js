import {getRandomNumber} from "./common";
import {FILM_ID_MAX, FILM_ID_MIN} from "../consts";


export const getFilmDuration = (duration, delimiter = `:`, zeroPadding = 2, labelsEnabled = false) => {
  const hours = duration / 3600;
  const minutes = duration % 3600 / 60;
  const seconds = duration % 60;
  const stack = [hours, minutes, seconds].map(Math.round);
  const labels = [`h`, `m`, `s`];
  let ret = ``;
  stack.forEach((value, index) => {
    if (value > 0) {
      ret += `${(ret) ? delimiter : ``}${String(value).padStart(zeroPadding, `0`)}${(labelsEnabled) ? labels[index] : ``}`;
    }
  });
  return ret;
};

export const humanizeRating = (rating) => {
  if (rating < 3) {
    return `Bad`;
  }
  if (rating < 5) {
    return `Normal`;
  }
  if (rating < 8) {
    return `Good`;
  }
  if (rating < 10) {
    return `Very good`;
  }
  return `Awesome`;
};

export const getRandomFilmId = () => getRandomNumber(FILM_ID_MIN, FILM_ID_MAX);

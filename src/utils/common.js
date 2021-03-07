import dayjs from 'dayjs';


export const capitalize = (string) => {
  if ((typeof string !== `string`) || (string.length === 0)) {
    return ``;
  }
  return `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
};

export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export const getRandomDate = () => {
  return dayjs().subtract(getRandomNumber(0, 365), `day`).toDate();
};

export const getRandomChoice = (list) => {
  return list[getRandomNumber(0, list.length - 1)];
};

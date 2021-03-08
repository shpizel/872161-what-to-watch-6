import {getRandomChoice, getRandomDate, getRandomNumber} from "../utils/common";

const names = [`Igor`, `Vasya`, `Vova`, `Pavel`, `Lesha`, `Anon`];

const texts = [
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director‘s funniest and most exquisitely designed movies in years.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  `Anderson‘s films are too precious for some, but for those of us willing to lose ourselves in them, they‘re a delight. ‘The Grand Budapest Hotel’ is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  `I didn‘t find it amusing, and while I can appreciate the creativity, it‘s an hour and 40 minutes I wish I could take back.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
];

export const getRandomUserReview = () => {
  const text = getRandomChoice(texts);
  const author = getRandomChoice(names);
  const createdAt = getRandomDate();
  const rating = getRandomNumber(1, 100) / 10;

  return ({text, author, createdAt, rating});
};

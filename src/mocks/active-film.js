const background = `img/bg-the-grand-budapest-hotel.jpg`;
const name = `The Grand Budapest Hotel`;
const poster = `img/the-grand-budapest-hotel-poster.jpg`;
const genre = `Drama`;
const year = 2014;
const director = `Никита Михалков`;
const starring = [`Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`,
  `Saoirse Ronan`,
  `Tony Revoloru`,
  `Tilda Swinton`,
  `Tom Wilkinson`,
  `Owen Wilkinson`,
  `Adrien Brody`,
  `Ralph Fiennes`,
  `Jeff Goldblum`
];
const ratings = Array(240).fill(``);
const description = [
  `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
];
const duration = 3850;

export const activeFilm = {background, name, poster, genre, year, director, starring, ratings, description, duration};

export const films = [
  {
    id: 1,
    name: `Film 1`,
    genre: ``,
    released: 2019,
    backgroundImage: ``,
    backgroundColor: ``,
    previewImage: ``,
    posterImage: ``,
    description: ``,
    rating: 4.5,
    scoresCount: 300,
    runTime: 3,
    director: ``,
    starring: [],
    previewVideoLink: ``,
    videoLink: ``,
    isFavorite: false
  },
  {
    id: 2,
    name: `Film 2`,
    genre: ``,
    released: 2019,
    backgroundImage: ``,
    backgroundColor: ``,
    previewImage: ``,
    posterImage: ``,
    description: ``,
    rating: 4.5,
    scoresCount: 300,
    runTime: 3,
    director: ``,
    starring: [],
    previewVideoLink: ``,
    videoLink: ``,
    isFavorite: false
  },
  {
    id: 3,
    name: `Film 3`,
    genre: `Drama`,
    released: 2019,
    backgroundImage: ``,
    backgroundColor: ``,
    previewImage: ``,
    posterImage: ``,
    description: ``,
    rating: 4.5,
    scoresCount: 300,
    runTime: 3,
    director: ``,
    starring: [],
    previewVideoLink: ``,
    videoLink: ``,
    isFavorite: false
  },
];

export const film = {
  id: 1,
  name: `Film 3`,
  genre: `Drama`,
  released: 2019,
  backgroundImage: ``,
  backgroundColor: ``,
  previewImage: ``,
  posterImage: ``,
  description: ``,
  rating: 4.5,
  scoresCount: 300,
  runTime: 3,
  director: ``,
  starring: [],
  previewVideoLink: ``,
  videoLink: ``,
  isFavorite: false
};

export const filmReviews = [{
  id: 1,
  user: {
    id: 1,
    name: ``
  },
  rating: 5.5,
  comment: ``,
  date: `22.05.2019`
}];

export const genres = [...new Set([`All genres`, ...films.map((item) => item.genre)])];


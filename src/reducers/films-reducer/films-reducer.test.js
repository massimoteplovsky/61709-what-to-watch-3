import {filmsReducer} from "./films-reducer.js";
import {changeFilmGenre, getFilmsByGenre} from '../../actions/action-creators/film-action-creators';
import {
  CHANGE_FILM_GENRE,
  GET_FILMS_BY_GENRE
} from '../../actions/types/film-action-types';
import {films} from '../../mocks/films';
const filteredFilms = [
  {
    id: 1,
    title: `Terminator 2. Judgment day`,
    genre: `Action`,
    year: 1991,
    promoPoster: `https://image.tmdb.org/t/p/original/ztBeLd2UCbUATJ1cXwwHev3G3xX.jpg`,
    poster: `http://i4.ytimg.com/vi/HgV7-MJwUBw/mqdefault.jpg`,
    cover: `https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg`,
    description: `In 1995, John Connor is living in Los Angeles with foster parents.
      His mother, Sarah Connor, had been preparing him throughout his childhood for his future role as the
      human resistance leader against Skynet, the artificial intelligence that will be given control of the United States'
      nuclear missiles and initiate a nuclear holocaust on August 29, 1997, known thereafter as "Judgment Day". However,
      Sarah was arrested and imprisoned at a mental hospital after attempting to bomb a computer factory.`,
    rating: 8.5,
    votes: 12000,
    runtime: 120,
    director: `James Cameron`,
    starring: [`Arnold Schwarzenegger`, `Linda Hamilton`, `Robert Patrick`],
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the
         glorious Mittel-European kitsch of one of the director funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `11.24.2016`,
        rating: 8.6
      },
      {
        text: `Anderson films are too precious for some, but for those of us willing to
        lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different,
        except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `10.18.2015`,
        rating: 8.9
      },
      {
        text: `I didn find it amusing, and while I can appreciate the creativity,
        it an hour and 40 minutes I wish I could take back.`,
        author: `Amanda Greever`,
        date: `09.13.2015`,
        rating: 8.0
      },
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the
         glorious Mittel-European kitsch of one of the director funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `11.24.2016`,
        rating: 8.6
      },
      {
        text: `Anderson films are too precious for some, but for those of us willing to
        lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different,
        except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `10.18.2015`,
        rating: 8.9
      },
      {
        text: `I didn find it amusing, and while I can appreciate the creativity,
        it an hour and 40 minutes I wish I could take back.`,
        author: `Amanda Greever`,
        date: `09.13.2015`,
        rating: 8.0
      },
    ]
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsReducer(void 0, {})).toEqual({
    films,
    filteredFilms: films,
    actualGenre: `All genres`
  });
});

it(`Reducer should change actual genre for recieved value`, () => {
  expect(filmsReducer({
    films,
    filteredFilms: films,
    actualGenre: `All genres`
  }, {
    type: CHANGE_FILM_GENRE,
    payload: `Drama`,
  })).toEqual({
    films,
    filteredFilms: films,
    actualGenre: `Drama`
  });
});

it(`Reducer should change filtered films for recieved value`, () => {
  expect(filmsReducer({
    films,
    filteredFilms: films,
    actualGenre: `Action`
  }, {
    type: GET_FILMS_BY_GENRE,
    payload: filteredFilms,
  })).toEqual({
    films,
    filteredFilms,
    actualGenre: `Action`
  });
});

describe(`Action creators work correctly`, () => {

  it(`Action creator for changing film genre returns correct action`, () => {
    expect(changeFilmGenre(`Drama`)).toEqual({
      type: CHANGE_FILM_GENRE,
      payload: `Drama`,
    });
  });

  it(`Action creator for getting films by genre returns correct action`, () => {
    expect(getFilmsByGenre(`Action`, films)).toEqual({
      type: GET_FILMS_BY_GENRE,
      payload: filteredFilms,
    });
  });
});

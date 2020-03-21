import {
  changeFilmGenre,
  toggleIsFavoriteFilm,
  incrementFilmCounter,
  loadAllFilms,
  loadPromoFilm,
  loadFilmReviews,
  loadFavoritesFilms,
  sendReview
} from "./film-actions.js";
import {
  CHANGE_FILM_GENRE,
  INCREMENT_FILM_COUNTER,
  LOAD_ALL_FILMS,
  LOAD_PROMO_FILM,
  LOAD_FILM_REVIEWS,
  CHANGE_FAVORITE_STATUS,
  ADD_REVIEW,
  LOAD_FAVORITES_FILMS,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES
} from "../../types/films/films.js";
import {film} from "../../../mocks/films-test.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../api.js";

const api = createAPI(() => {});

describe(`Action creators work correctly`, () => {

  it(`Action creator for changing film genre returns correct action`, () => {
    expect(changeFilmGenre(`Drama`)).toEqual({
      type: CHANGE_FILM_GENRE,
      payload: `Drama`,
    });
  });

  it(`Action creator for changing film counter returns correct action`, () => {
    expect(incrementFilmCounter()).toEqual({
      type: INCREMENT_FILM_COUNTER,
      payload: null,
    });
  });

  it(`Action creator for loading films returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = loadAllFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_ALL_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for loading favorite films returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFilms = loadFavoritesFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return loadFilms(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FAVORITES_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for loading promo film returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_PROMO_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for loading film reviews returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmReviewsLoader = loadFilmReviews(film.id);

    apiMock
      .onGet(`/comments/${film.id}`)
      .reply(200, [{fake: true}]);

    return filmReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FILM_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator to change film status on favorite and add to favorite list`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFilmStatus = toggleIsFavoriteFilm(film.id, 1);

    apiMock
      .onPost(`/favorite/${film.id}/${1}`)
      .reply(200, [{fake: true}]);

    return changeFilmStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: CHANGE_FAVORITE_STATUS,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ADD_TO_FAVORITES,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator to change film status on unfavorite and delete from favorite list`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFilmStatus = toggleIsFavoriteFilm(film.id, 0);

    apiMock
      .onPost(`/favorite/${film.id}/${0}`)
      .reply(200, [{fake: true}]);

    return changeFilmStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: CHANGE_FAVORITE_STATUS,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DELETE_FROM_FAVORITES,
          payload: 1,
        });
      });
  });

  it(`Action creator for sending review returns correct action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewInfo = {
      rating: 5,
      comment: ``
    };
    const send = sendReview(reviewInfo, film.id, () => {});

    apiMock
      .onPost(`/comments/${film.id}`, reviewInfo)
      .reply(200, [{fake: true}]);

    return send(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ADD_REVIEW,
          payload: [{fake: true}],
        });
      });
  });
});

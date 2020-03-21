import {
  string,
  number,
  arrayOf,
  array,
  bool,
  oneOfType,
  oneOf,
  node,
  shape
} from "prop-types";

export const PropValidator = {
  FILM_INFO: shape({
    id: number.isRequired,
    name: string.isRequired,
    genre: string.isRequired,
    released: number.isRequired,
    backgroundImage: string.isRequired,
    backgroundColor: string.isRequired,
    previewImage: string.isRequired,
    posterImage: string.isRequired,
    description: string.isRequired,
    rating: number.isRequired,
    scoresCount: number.isRequired,
    runTime: number.isRequired,
    director: string.isRequired,
    starring: array.isRequired,
    previewVideoLink: string.isRequired,
    videoLink: string.isRequired,
    isFavorite: bool.isRequired
  }),
  FILM_REVIEW: arrayOf(
      shape({
        id: number.isRequired,
        user: shape({
          id: number.isRequired,
          name: string.isRequired
        }),
        rating: number.isRequired,
        comment: string.isRequired,
        date: string.isRequired
      })
  ).isRequired,
  USER_INFO: oneOfType([
    shape({
      id: number.isRequired,
      email: string.isRequired,
      name: string.isRequired,
      avatarUrl: string.isRequired
    }).isRequired,
    oneOf([null]).isRequired
  ]),
  CHILD_NODE: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
  ITEM_ID: oneOfType([
    number.isRequired,
    string.isRequired
  ]).isRequired
};


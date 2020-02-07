import {
  shape,
  string,
  number,
  arrayOf
} from "prop-types";

export const filmTypes = {
  info: shape({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired
  }),
  titles: arrayOf(string).isRequired
};

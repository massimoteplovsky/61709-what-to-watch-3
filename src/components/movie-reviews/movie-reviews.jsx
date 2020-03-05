import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {makeRating, makeChuncks, getFormatDate, sortByDate} from '../../helpers/helpers';

const MovieReviews = ({filmReviews}) => {
  const REVIEW_IN_A_ROW = Math.ceil(filmReviews.length / 2);
  const reviewChunks = makeChuncks(filmReviews.sort(sortByDate), REVIEW_IN_A_ROW);

  if (filmReviews.length === 0) {
    return (
      <div className="movie-card__reviews movie-card__row">
        No reviews
      </div>
    );
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      {
        reviewChunks.map((chunk, index) => {
          return (
            <div key={index} className="movie-card__reviews-col">
              {
                chunk.map(({id, user: {name}, rating, comment, date}) => {
                  return (
                    <div key={id} className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">{comment}</p>
                        <footer className="review__details">
                          <cite className="review__author">{name}</cite>
                          <time className="review__date" dateTime={date}>{getFormatDate(date)}</time>
                        </footer>
                      </blockquote>
                      <div className="review__rating">{makeRating(rating)}</div>
                    </div>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
};

MovieReviews.propTypes = {
  filmReviews: PropValidator.FILM_REVIEW
};

export default MovieReviews;

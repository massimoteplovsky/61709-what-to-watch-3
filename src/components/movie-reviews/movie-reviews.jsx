import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import {makeRating, makeChuncks, getFormatDate, sortByDate} from '../../helpers/helpers';

const MovieReviews = ({filmInfo}) => {
  const {reviews} = filmInfo;
  const REVIEW_IN_A_ROW = Math.ceil(reviews.length / 2);
  const reviewChunks = makeChuncks(reviews.sort(sortByDate), REVIEW_IN_A_ROW);

  return (
    <div className="movie-card__reviews movie-card__row">
      {
        reviewChunks.map((chunk, index) => {
          return (
            <div key={index} className="movie-card__reviews-col">
              {
                chunk.map(({text, author, date, rating}, reviewIndex) => {
                  return (
                    <div key={reviewIndex} className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">{text}</p>
                        <footer className="review__details">
                          <cite className="review__author">{author}</cite>
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
  filmInfo: PropValidator.FILM_INFO
};

export default MovieReviews;

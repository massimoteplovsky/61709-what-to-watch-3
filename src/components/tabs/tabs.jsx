import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';

const Tabs = ({filmInfo, activeItemIndex, onChangeActiveItemIndex}) => {
  const tabItems = [
    {
      title: `Overview`,
      component: <MovieOverview filmInfo={filmInfo}/>
    },
    {
      title: `Details`,
      component: <MovieDetails filmInfo={filmInfo}/>
    },
    {
      title: `Reviews`,
      component: <MovieReviews filmInfo={filmInfo}/>
    }
  ];
  const activeComponent = tabItems[activeItemIndex].component;

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            tabItems.map((item, index) => {
              return (
                <li key={index} className={activeItemIndex === index ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                  <a
                    href="#"
                    className="movie-nav__link"
                    onClick={(event) => {
                      event.preventDefault();
                      onChangeActiveItemIndex(index);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </nav>
      {activeComponent}
    </>
  );
};

Tabs.propTypes = {
  filmInfo: PropValidator.FILM_INFO,
  activeItemIndex: PropValidator.ACTIVE_ITEM_INDEX,
  onChangeActiveItemIndex: PropValidator.CHANGE_ACTIVE_ITEM
};

export default Tabs;

import React from 'react';
import renderer from 'react-test-renderer';
import {film} from '../../mocks/films-test';
import MovieCard from './movie-card.jsx';

it(`<MovieCard /> component renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      film={film}
      onTitleClick={() => {}}
      src={film.src}
      poster={film.poster}
      isPlaying={false}
      isMuted={true}
      isPreviewMode={true}
      onRunModeToggle={() => {}}
    >
      <video/>
    </MovieCard>).toJSON();
  expect(tree).toMatchSnapshot();
});

import {combineReducers} from 'redux';
import {films} from './films/films';
import {application} from './application/application';

export default combineReducers({
  films,
  application
});

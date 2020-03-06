import {combineReducers} from 'redux';
import {films} from './films/films';
import {application} from './application/application';
import {user} from './user/user';

export default combineReducers({
  films,
  application,
  user
});

import {combineReducers} from "redux";
import {films} from "./films/films.js";
import {application} from "./application/application.js";
import {user} from "./user/user.js";

export default combineReducers({
  films,
  application,
  user
});

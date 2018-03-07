import $ from "jquery";

import { UPDATE_USER } from "../actions/userActions";

export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    default:
      return state;
  }
}

export function apiRequest() {
  return dispatch => {
    $.ajax({
      url: "http://google.com",
      success() {
        console.log("success!");
      },
      error() {
        console.log("error!");
      }
    });
  };
}

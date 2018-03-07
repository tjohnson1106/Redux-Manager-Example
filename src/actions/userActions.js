import $ from "jquery";
import { request } from "http";

export const UPDATE_USER = "users: updateUser";
export const SHOW_ERROR = "users: showError";

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: "ERROR!!"
    }
  };
}

export function apiRequest() {
  return dispatch => {
    $.ajax({
      url: "http://google.com",
      success(response) {
        console.log("success!");

        dispatch(updateUser(response.newUser));
      },
      error() {
        console.log("error!");

        dispatch(showError());
      }
    });
  };
}

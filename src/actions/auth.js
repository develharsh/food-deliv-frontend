import cookies from "react-cookies";
import axios from "axios";
import { BASE_URL } from "../utils/config";

import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../constants/auth";
const token = cookies.load("token");

//Load User
export const loadUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER_REQUEST });
  const config = {
    headers: {
      "x-access-token": token,
    },
  };
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}auth/load-user`,
      headers: {
        "x-access-token": token,
      },
    });
    console.log(response);
    dispatch({ type: LOAD_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL });
  }
};

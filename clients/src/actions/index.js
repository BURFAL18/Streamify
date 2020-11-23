import streams from "../apis/streams";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "./types";
import history from "../history";

export const signIn = (UID) => {
  return {
    type: SIGN_IN,
    payload: UID,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { UID } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, UID });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
  history.push("/");
};

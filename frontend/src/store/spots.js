import { useSelector } from "react-redux";
import { csrfFetch } from "./csrf";

const GET_GENERAL_SPOT_DATA = "spots/GET_GENERAL_SPOT_DATA";
const GET_SPECIFIC_SPOT_DATA = "spots/GET_SPECIFIC_SPOT_DATA";
const CREATE_SPOT = "spots/CREATE_SPOT";

///////////////////////////////////////////////////////////

const getGeneralSpotData = (spots) => {
  return {
    type: GET_GENERAL_SPOT_DATA,
    spots,
  };
};

const getSpecificSpotData = (spot) => {
  return {
    type: GET_SPECIFIC_SPOT_DATA,
    spot,
  };
};

///////////////////////////////////////////////////////////

export const getGeneralSpotDataThunk = () => async (dispatch) => {
  const jsonResponse = await csrfFetch("/api/spots");

  if (jsonResponse.ok) {
    const response = await jsonResponse.json();
    dispatch(getGeneralSpotData(response.Spots));
  }
};

export const getSpecificSpotDataThunk = (spotId) => async (dispatch) => {
  const jsonResponse = await csrfFetch(`/api/spots/${spotId}`);

  if (jsonResponse.ok) {
    const response = await jsonResponse.json();
    dispatch(getSpecificSpotData(response));
  }
};

export const createSpotThunk = (spot) => async () => {
  const jsonResponse = await csrfFetch("/api/spots", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spot),
  });

  const response = await jsonResponse.json();

  console.log(response);

  return response;
};

export const updateSpotThunk = (spotId, spot) => async () => {
  const jsonResponse = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spot),
  });

  const response = await jsonResponse.json();

  return response;
};

///////////////////////////////////////////////////////////

const initialState = { general: [], specific: {} };

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENERAL_SPOT_DATA: {
      return { ...state, general: action.spots };
    }
    case GET_SPECIFIC_SPOT_DATA: {
      return {
        ...state,
        specific: {
          ...state.specific,
          [action.spot.id]: action.spot,
        },
      };
    }
    default:
      return state;
  }
};

export default spotsReducer;

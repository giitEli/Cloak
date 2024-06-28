import { csrfFetch } from "./csrf";

const GET_WATCHLIST = "watchlist/get";
const ADD_TO_WATCHLIST = "watchlist/add";
const REMOVE_FROM_WATCHLIST = "watchlist/remove";

///////////////////////////////////////////////////////////

const addToWatchlist = (stock) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: stock,
  };
};

const getWatchlist = (stocks) => {
  return {
    type: GET_WATCHLIST,
    payload: stocks,
  };
};

const removeFromWatchlist = (stockId) => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    payload: stockId,
  };
};

///////////////////////////////////////////////////////////

export const getWatchlistThunk = () => async (dispatch) => {
  const raw = await csrfFetch("/api/watchlist");
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(getWatchlist(response.data));
  }
};

export const addToWatchlistThunk = (stockId) => async (dispatch) => {
  const raw = await csrfFetch("/api/watchlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stockId }),
  });
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(addToWatchlist(response.data.spotId));
  }
};

export const removeFromWatchlistThunk = (stockId) => async (dispatch) => {
  const raw = await csrfFetch(`/api/watchlist/${stockId}`, {
    method: "DELETE",
  });
  const response = await raw.json();

  console.log(response);

  if (response.status === "success") {
    dispatch(removeFromWatchlist(response.data.stockId));
  }
};

///////////////////////////////////////////////////////////
const initialState = { stocks: [] };

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WATCHLIST: {
      return { ...state, stocks: action.payload };
    }
    case ADD_TO_WATCHLIST: {
      return { ...state, stocks: [...state.stocks, action.payload] };
    }
    case REMOVE_FROM_WATCHLIST: {
      const watchlistStocks = state.stocks.filter(
        (stockId) => stockId !== Number(action.payload)
      );
      return { ...state, stocks: watchlistStocks };
    }
    default:
      return state;
  }
};

export default watchlistReducer;

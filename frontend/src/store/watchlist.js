import { csrfFetch } from "./csrf";

const GET_WATCHLIST = "watchlist/get";
const ADD_TO_WATCHLIST = "watchlist/add";
const REMOVE_FROM_WATCHLIST = "watchlist/remove";

///////////////////////////////////////////////////////////

const getWatchlist = (stocks) => {
  return {
    type: GET_WATCHLIST,
    payload: stocks,
  };
};

const addToWatchlist = (stock) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: stock,
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
    dispatch(addToWatchlist(response.data));
  }
};

export const removeFromWatchlistThunk = (stockId) => async (dispatch) => {
  const raw = await csrfFetch(`/api/watchlist/${stockId}`, {
    method: "DELETE",
  });
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(removeFromWatchlist(response.data.id));
  }
};

///////////////////////////////////////////////////////////
const initialState = { stocks: {} };

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WATCHLIST: {
      const watchlist = action.payload.reduce((acc, stock) => {
        acc[stock.id] = stock;
        return acc;
      }, {});

      return { ...state, stocks: watchlist };
    }
    case ADD_TO_WATCHLIST: {
      const watchlist = { ...state, stocks: { ...state.stocks } };
      watchlist.stocks[action.payload.id] = action.payload;
      return watchlist;
    }
    case REMOVE_FROM_WATCHLIST: {
      const watchlist = { ...state };
      watchlist.stocks = Object.keys(state.stocks)
        .filter((id) => id != action.payload)
        .reduce((acc, id) => {
          acc[id] = state.stocks[id];
          return acc;
        }, {});
      return watchlist;
    }
    default:
      return state;
  }
};

export default watchlistReducer;

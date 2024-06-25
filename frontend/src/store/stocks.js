import { csrfFetch } from "./csrf";

const STOCK_SEARCH = "stocks/search";
const GET_ALL_STOCKS = "stocks/getAllStocks";

///////////////////////////////////////////////////////////

const getAllStocks = (stocks) => {
  return {
    type: GET_ALL_STOCKS,
    payload: stocks,
  };
};

const addStock = (stock) => {
  return {
    type: STOCK_SEARCH,
    payload: stock,
  };
};

///////////////////////////////////////////////////////////

export const getAllStocksThunk = () => async (dispatch) => {
  const raw = await csrfFetch("/api/stocks/");
  const response = await raw.json();

  console.log(response);

  if (response.status === "success") {
    dispatch(getAllStocks(response.data));
  }

  return response;
};

export const searchStockThunk = (symbol) => async (dispatch) => {
  const raw = await csrfFetch(`/api/stocks/${symbol}`);
  const response = await raw.json();

  console.log(response);

  if (response.status === "success") {
    dispatch(addStock(response.data));
  }

  return response;
};

///////////////////////////////////////////////////////////
const initialState = { allStocks: {} };

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STOCKS: {
      const allStocks = action.payload.reduce((acc, ele) => {
        acc[ele.id] = ele;
        return acc;
      }, {});
      return { ...state, allStocks };
    }
    case STOCK_SEARCH: {
      const id = action.payload.id;
      const state_copy = {
        all_stocks: { ...state.allStocks },
      };
      state_copy.all_stocks[id] = action.payload;
      return state_copy;
    }
    default:
      return state;
  }
};

export default stocksReducer;

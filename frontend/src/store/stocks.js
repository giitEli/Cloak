import { csrfFetch } from "./csrf";

const STOCK_SEARCH = "stocks/search";
const GET_ALL_STOCKS = "stocks/getAllStocks";
const GET_SPECIFIC_STOCK = "stocks/getGraphData";

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

const getSpecificStock = (stockId, data) => {
  return {
    type: GET_SPECIFIC_STOCK,
    payload: { stockId, data },
  };
};

///////////////////////////////////////////////////////////

export const getAllStocksThunk = (page) => async (dispatch) => {
  const raw = await csrfFetch(`/api/stocks?page=${page}`);
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(getAllStocks(response.data));
  }

  return response;
};

export const searchStockThunk = (symbol) => async (dispatch) => {
  const raw = await csrfFetch("/api/stocks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ symbol }),
  });
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(addStock(response.data));
  }

  return response;
};

export const getSpecificStockThunk = (stockId) => async (dispatch) => {
  const raw = await csrfFetch(`/api/stocks/${stockId}`);
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(getSpecificStock(stockId, response.data));
  }

  return response;
};

///////////////////////////////////////////////////////////

const initialState = { allStocks: {}, graphData: {} };

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STOCKS: {
      const allStocks = action.payload.reduce((acc, ele) => {
        acc[ele.id] = ele;
        return acc;
      }, {});
      const newState = {
        ...state,
        allStocks,
        graphData: { ...state.graphData },
      };
      return newState;
    }
    case STOCK_SEARCH: {
      const id = action.payload.id;
      const newState = {
        ...state,
        allStocks: { ...state.allStocks },
        graphData: { ...state.graphData },
      };
      newState.allStocks[id] = action.payload;
      return newState;
    }
    case GET_SPECIFIC_STOCK: {
      const newState = {
        ...state,
        allStocks: { ...state.allStocks },
        graphData: { ...state.graphData },
      };
      newState.allStocks[action.payload.stockId] = action.payload.data.stock;
      newState.graphData[action.payload.stockId] =
        action.payload.data.graphData;
      return newState;
    }
    default:
      return state;
  }
};

export default stocksReducer;

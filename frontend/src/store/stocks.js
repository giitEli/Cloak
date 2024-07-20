import { csrfFetch } from "./csrf";

const STOCK_SEARCH = "stocks/search";
const GET_ALL_STOCKS = "stocks/getAllStocks";
const GET_GRAPH_DATA = "stocks/getGraphData";

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

const getGraphData = (stockId, data) => {
  return {
    type: GET_GRAPH_DATA,
    payload: { stockId, data },
  };
};

///////////////////////////////////////////////////////////

export const getAllStocksThunk = () => async (dispatch) => {
  const raw = await csrfFetch("/api/stocks/");
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(getAllStocks(response.data));
  }

  return response;
};

export const searchStockThunk = (symbol) => async (dispatch) => {
  const raw = await csrfFetch(`/api/stocks/search/${symbol}`);
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(addStock(response.data));
  }

  return response;
};

export const getStockGraphDataThunk = (stockId) => async (dispatch) => {
  const raw = await csrfFetch(`/api/stocks/${stockId}`);
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(getGraphData(stockId, response.data.graphData));
  }
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
      return { ...state, allStocks };
    }
    case STOCK_SEARCH: {
      const id = action.payload.id;
      const stateCopy = {
        allStocks: { ...state.allStocks },
      };
      stateCopy.allStocks[id] = action.payload;
      return stateCopy;
    }
    case GET_GRAPH_DATA: {
      const newState = { ...state };
      console.log(action.payload);
      state.graphData[action.payload.stockId] = action.payload.data;
      return { newState };
    }
    default:
      return state;
  }
};

export default stocksReducer;

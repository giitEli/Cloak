import { csrfFetch } from "./csrf";

const GET_PORTFOLIOS = "portfolios/get";
const GET_PORTFOLIO_BY_ID = "portfolios/getById";
const CREATE_PORTFOLIO = "portfolios/create";
const UPDATE_PORTFOLIO = "portfolios/update";

///////////////////////////////////////////////////////////

const getPortfolios = (portfolios) => {
  return {
    type: GET_PORTFOLIOS,
    payload: portfolios,
  };
};

const createPortfolio = (portfolio) => {
  return {
    type: CREATE_PORTFOLIO,
    payload: portfolio,
  };
};

const updatePortfolio = (portfolio) => {
  return {
    type: UPDATE_PORTFOLIO,
    payload: portfolio,
  };
};

///////////////////////////////////////////////////////////

export const getPortfoliosThunk = () => async (dispatch) => {
  const raw = await csrfFetch("/api/portfolios");
  const response = await raw.json();

  console.log(response);

  if (response.status === "success") {
    dispatch(getPortfolios(response.data));
  }
};

export const createPortfolioThunk = (portfolio) => async (dispatch) => {
  const raw = await csrfFetch("/api/portfolios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(portfolio),
  });
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(createPortfolio(response.data));
  }
  return response;
};

export const updatePortfolioThunk =
  (portfolioId, portfolioData) => async (dispatch) => {
    const raw = await csrfFetch(`/api/portfolios/${portfolioId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(portfolioData),
    });
    const response = await raw.json();

    if (response.status === "success") {
      // dispatch(updatePortfolio(response.data));
      dispatch(getPortfoliosThunk());
    }
    return response;
  };

///////////////////////////////////////////////////////////
const initialState = { userPortfolios: {} };

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PORTFOLIOS: {
      return { ...state, userPortfolios: action.payload };
    }
    case UPDATE_PORTFOLIO: {
      console.log(action.payload);
      const { id, name, balance } = action.payload;
      const newState = { ...state };
      newState.userPortfolios[id].name = name;
      newState.userPortfolios[id].balance = balance;

      return newState;
    }
    default:
      return state;
  }
};

export default portfolioReducer;

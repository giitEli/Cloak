import { csrfFetch } from "./csrf";

const GET_PORTFOLIOS = "portfolios/get";
const GET_PORTFOLIO_BY_ID = "portfolios/getById";
const CREATE_PORTFOLIO = "portfolios/create";
const UPDATE_PORTFOLIO = "portfolios/update";
const DELETE_PORTFOLIO = "portfolios/delete";

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

const deletePortfolio = (portfolioId) => {
  return {
    type: DELETE_PORTFOLIO,
    payload: portfolioId,
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
    // dispatch(createPortfolio(response.data));
    dispatch(getPortfoliosThunk());
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

export const deletePortfolioThunk = (portfolioId) => async (dispatch) => {
  const raw = await csrfFetch(`/api/portfolios/${portfolioId}`, {
    method: "DELETE",
  });
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(deletePortfolio(portfolioId));
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
    case DELETE_PORTFOLIO: {
      const newState = { ...state };
      newState.userPortfolios = Object.keys(state.userPortfolios)
        .filter((id) => id != action.payload)
        .reduce((acc, id) => {
          acc[id] = state.userPortfolios[id];
          return acc;
        }, {});
      return newState;
    }
    default:
      return state;
  }
};

export default portfolioReducer;

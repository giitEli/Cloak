import { csrfFetch } from "./csrf";

const GET_TRANSACTIONS = "transactions/get";

///////////////////////////////////////////////////////////

const getTransactions = (transactions) => {
  return {
    type: GET_TRANSACTIONS,
    payload: transactions,
  };
};

///////////////////////////////////////////////////////////

export const getTransactionsThunk = () => async (dispatch) => {
  const raw = await csrfFetch("/api/transactions");
  const response = raw.json();

  if (response.status === "success") {
    dispatch(getTransactions(response.data));
  }
};

///////////////////////////////////////////////////////////

const initialState = [];

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default transactionReducer;

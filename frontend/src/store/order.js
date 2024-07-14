import { csrfFetch } from "./csrf";
import { getPortfoliosThunk } from "./portfolio";

const GET_ORDERS = "orders/get";
const ADD_TO_CART = "orders/addToCart";
const REMOVE_FROM_CART = "orders/removeFromCart";
const EDIT_ORDER_IN_CART = "orders/edit";
const CLEAR_CART = "orders/clear";
const CHECKOUT = "orders/checkout";

///////////////////////////////////////////////////////////

const getOrders = (orders) => {
  return {
    type: GET_ORDERS,
    payload: orders,
  };
};

const addToCart = (order) => {
  return {
    type: ADD_TO_CART,
    payload: order,
  };
};

const removeFromCart = (orderId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: orderId,
  };
};

const editOrderInCart = (order) => {
  return {
    type: EDIT_ORDER_IN_CART,
    payload: order,
  };
};

const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

///////////////////////////////////////////////////////////

export const getOrdersThunk = () => async (dispatch) => {
  const raw = await csrfFetch("/api/orders");
  const response = await raw.json();

  console.log({ response });

  if (response.status === "success") {
    dispatch(getOrders(response.data));
  }
};

export const addToCartThunk = (stockId, amount) => async (dispatch) => {
  const raw = await csrfFetch("/api/orders/add", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stockId, amount }),
  });
  const response = await raw.json();

  console.log({ response });

  if (response.status === "success") {
    dispatch(addToCart(response.data));
  }

  return response;
};

export const removeFromCartThunk = (stockId) => async (dispatch) => {
  const raw = await csrfFetch("/api/orders/remove", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stockId }),
  });
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(removeFromCart(response.data.stockId));
  }
};

export const editOrderInCartThunk = (stockId, amount) => async (dispatch) => {
  const raw = await csrfFetch("/api/orders", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stockId, amount }),
  });
  const response = await raw.json();

  console.log(response);

  if (response.status === "success") {
    dispatch(editOrderInCart(response.data));
  }

  return response;
};

export const clearCartThunk = () => async (dispatch) => {
  const raw = await csrfFetch("/api/orders", {
    method: "DELETE",
  });
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(clearCart());
  }

  return response;
};

export const checkOutThunk = (portfolioId) => async (dispatch) => {
  const raw = await csrfFetch(`/api/orders/${portfolioId}`);
  const response = await raw.json();

  if (response.status === "success") {
    dispatch(clearCart());
    dispatch(getPortfoliosThunk());
  }
};

///////////////////////////////////////////////////////////
const initialState = { userOrders: {} };

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS: {
      return { ...state, userOrders: action.payload };
    }
    case ADD_TO_CART: {
      const newState = { ...state, userOrders: { ...state.userOrders } };
      newState.userOrders[action.payload.id] = action.payload;
      return newState;
    }
    case REMOVE_FROM_CART: {
      const newState = { ...state, userOrders: { ...state.userOrders } };
      delete newState.userOrders[action.payload];
      return newState;
    }
    case EDIT_ORDER_IN_CART: {
      const newState = { ...state, userOrders: { ...state.userOrders } };
      newState.userOrders[action.payload.stockId].amount =
        action.payload.amount;
      return newState;
    }
    case CLEAR_CART: {
      return { ...state, userOrders: {} };
    }
    default:
      return state;
  }
};

export default ordersReducer;

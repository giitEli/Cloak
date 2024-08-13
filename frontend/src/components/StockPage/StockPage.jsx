import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSpecificStockThunk } from "../../store/stocks";
import { getOrdersThunk } from "../../store/order";
import AddToOrderModal from "../Modal/AddToOrderModal";
import StockChart from "./StockChart";
import {
  addToWatchlistThunk,
  getWatchlistThunk,
  removeFromWatchlistThunk,
} from "../../store/watchlist";
import s from "./StockPage.module.css";

////////////////////////////////////////////////////

const StockPage = () => {
  const { stockId } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const stock = useSelector((state) => state.stocks.allStocks[stockId] || {});
  const watchlist = useSelector((state) => state.watchlist.stocks || {});
  const graphData = useSelector((state) => {
    if (state.stocks.graphData && state.stocks.graphData[stockId]) {
      return state.stocks.graphData[stockId].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    }
    return [];
  });

  /////////////////////////////

  useEffect(() => {
    dispatch(getWatchlistThunk());
    dispatch(getOrdersThunk());
    if (!graphData.length || !stock) {
      dispatch(getSpecificStockThunk(stockId));
    }
  }, []);

  const {
    name,
    symbol,
    price,
    currency,
    exchange,
    country,
    type,
    industry,
    ipo,
    marketCap,
    outstandingShares,
  } = stock;

  const ipoDate = new Date(ipo);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = `${months[ipoDate.getMonth()]} ${
    ipoDate.getDay() + 1
  }, ${ipoDate.getFullYear()}`;

  /////////////////////////////

  return (
    <div className={s.stock_page_container}>
      <div className={s.top_section}>
        <div className={s.top_left_section}>
          <h3 className={s.stock_name}>{name}</h3>
          <div className={s.stock_chart_container}>
            {graphData && <StockChart graphData={graphData} stock={stock} />}
          </div>
        </div>
        <div className={s.top_right_section}>
          <h3 className={s.symbol}>{symbol}</h3>
          <h5 className={s.price}>${price}</h5>
          {user && watchlist[stockId] && (
            <button
              className={`${s.remove_from_watchlist_button} red_button`}
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeFromWatchlistThunk(stockId));
              }}
            >
              Remove from watchlist
            </button>
          )}
          {user && !watchlist[stockId] && (
            <button
              className={`${s.add_to_watchlist_button} blue_button`}
              onClick={(e) => {
                e.preventDefault();
                dispatch(addToWatchlistThunk(stockId));
              }}
            >
              Add to watchlist
            </button>
          )}
          {user && (
            <AddToOrderModal
              stock={stock}
              className={`${s.add_to_order_modal_button} green_button`}
            />
          )}
        </div>
      </div>
      <div className={s.bottom_section}>
        <div className={s.bottom_section_row}>
          <li>Currency: {currency}</li>
          <li>Exchange: {exchange}</li>
          <li>Country: {country}</li>
          <li>Industry: {industry}</li>
        </div>
        <div className={s.bottom_section_row}>
          <li>Type: {type}</li>
          <li>IPO: {date}</li>
          <li>Market Cap: {marketCap}</li>
          <li>Outstanding Shares: {outstandingShares}</li>
        </div>
      </div>
    </div>
  );
};

export default StockPage;

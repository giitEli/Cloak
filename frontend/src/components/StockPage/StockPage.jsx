import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import Stock from "../StocksDisplay/Stock";
import { useEffect } from "react";
import { getAllStocksThunk, getStockGraphDataThunk } from "../../store/stocks";
import StockChart from "./StockChart";
import { addToWatchlistThunk } from "../../store/watchlist";
import s from "./StockPage.module.css";

const StockPage = () => {
  const { stockId } = useParams();
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stocks.allStocks[stockId] || {});
  const graphData = useSelector((state) => {
    if (state.stocks.graphData) {
      return state.stocks.graphData.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    }
  });

  useEffect(() => {
    dispatch(getAllStocksThunk());
    dispatch(getStockGraphDataThunk(stockId));
  }, []);

  // console.log(graphData);

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

  return (
    <div className={s.stock_page_container}>
      <h3>{name}</h3>
      {graphData && <StockChart graphData={graphData} />}
      <h4>{symbol}</h4>
      <ul>
        <li>Price: {price}</li>
        <li>Currency: {currency}</li>
        <li>Exchange: {exchange}</li>
        <li>Country: {country}</li>
        <li>Type: {type}</li>
        <li>Industry: {industry}</li>
        <li>IPO: {ipo}</li>
        <li>Market Cap: {marketCap}</li>
        <li>Outstanding Shares: {outstandingShares}</li>
      </ul>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addToWatchlistThunk(stockId));
        }}
      >
        Add to Watchlist!
      </button>
    </div>
  );
};

export default StockPage;

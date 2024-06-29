import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStocksThunk } from "../../store/stocks";
import {
  getWatchlistThunk,
  removeFromWatchlistThunk,
} from "../../store/watchlist";
import Stock from "../StocksDisplay/Stock";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stocks = useSelector((state) => state.stocks.allStocks);
  const watchlist = useSelector((state) => state.watchlist.stocks);

  useEffect(() => {
    dispatch(getAllStocksThunk());
    dispatch(getWatchlistThunk());
  }, []);

  if (!watchlist.length) {
    return <div>You have nothing in your watchlist</div>;
  }

  return (
    <div>
      {watchlist.map((stockId) => {
        const stock = stocks[stockId];
        if (stock) {
          const {
            id,
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
            <div key={id}>
              <h3
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/stocks/${id}`);
                }}
              >
                {name}
              </h3>
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
                  dispatch(removeFromWatchlistThunk(id));
                }}
              >
                Remove from watchlist
              </button>
            </div>
          );
        }
        return <></>;
      })}
    </div>
  );
};

export default WatchList;

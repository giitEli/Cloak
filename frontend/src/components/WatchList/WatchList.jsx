import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStocksThunk } from "../../store/stocks";
import {
  getWatchlistThunk,
  removeFromWatchlistThunk,
} from "../../store/watchlist";

const WatchList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.allStocks);
  const watchlist = useSelector((state) => state.watchlist.stocks);

  useEffect(() => {
    dispatch(getAllStocksThunk());
    dispatch(getWatchlistThunk());
  }, []);

  return (
    <div>
      {watchlist.map((stockId) => {
        const stock = stocks[stockId];
        if (stock) {
          return (
            <div key={stockId}>
              <div>{stock.name}</div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(removeFromWatchlistThunk(stock.id));
                }}
              >
                Remove from Watchlist
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

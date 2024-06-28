import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Stock from "../StocksDisplay/Stock";
import { useEffect } from "react";
import { getAllStocksThunk, getStockGraphDataThunk } from "../../store/stocks";
import StockChart from "./StockChart";
import { addToWatchlistThunk } from "../../store/watchlist";

const StockPage = () => {
  const { stockId } = useParams();
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stocks.allStocks[stockId] || {});
  const graphData = useSelector((state) => state.stocks.graphData);

  useEffect(() => {
    dispatch(getAllStocksThunk());
    dispatch(getStockGraphDataThunk(stockId));
  }, []);

  // console.log(graphData);

  return (
    <div>
      <div>stock page for {stock.name}</div>
      <StockChart graphData={graphData} />
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

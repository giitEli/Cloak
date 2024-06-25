import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllStocksThunk } from "../../store/stocks";
import s from "./StocksDisplay.module.css";

const StocksDisplay = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.allStocks);

  useEffect(() => {
    dispatch(getAllStocksThunk());
  }, [dispatch]);

  return (
    <div>
      {Object.keys(stocks).map((id) => {
        return <div key={id}>{stocks[id].name}</div>;
      })}
    </div>
  );
};

export default StocksDisplay;

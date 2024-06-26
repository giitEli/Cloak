import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllStocksThunk } from "../../store/stocks";
import s from "./StocksDisplay.module.css";
import Stock from "./Stock";
import { searchStockThunk } from "../../store/stocks";

const filterStocks = (stocks, string) => {
  return Object.keys(stocks).filter((id) => {
    const { symbol, name } = stocks[id];
    if (
      symbol.toLowerCase().includes(string.toLowerCase()) ||
      name.toLowerCase().includes(string.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
};

const StocksDisplay = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.allStocks);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllStocksThunk());
  }, [dispatch]);

  const submit = async (e) => {
    e.preventDefault();
    setFilter(search);
    if (search.length <= 5) {
      dispatch(searchStockThunk(search));
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          Symbol Search
          <input
            type="text"
            value={search}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
          />
        </label>
        <button type="submit">Search</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSearch("");
            setFilter("");
          }}
        >
          Clear
        </button>
      </form>
      {filterStocks(stocks, filter).map((id) => {
        return <Stock key={id} stock={stocks[id]} />;
      })}
    </div>
  );
};

export default StocksDisplay;

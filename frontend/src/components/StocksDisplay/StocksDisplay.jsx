import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllStocksThunk } from "../../store/stocks";
import { getWatchlistThunk } from "../../store/watchlist";
import s from "./StocksDisplay.module.css";
import Stock from "./Stock";
import { searchStockThunk } from "../../store/stocks";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { MoonLoader } from "react-spinners";

////////////////////////////////////////////////////////////////////

const filterStocks = (stocks, string) => {
  return Object.keys(stocks).filter((id) => {
    const { symbol, name, industry } = stocks[id];
    if (
      symbol.toLowerCase().includes(string.toLowerCase()) ||
      name.toLowerCase().includes(string.toLowerCase()) ||
      industry.toLowerCase().includes(string.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
};

////////////////////////////////////////////////////////////////////

const StocksDisplay = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.allStocks);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /////////////////////////////

  useEffect(() => {
    dispatch(getAllStocksThunk());
    dispatch(getWatchlistThunk());
  }, [dispatch]);

  const submit = async (e) => {
    e.preventDefault();
    setFilter(search);
    if (search.length <= 5) {
      setIsLoading(true);
      await dispatch(searchStockThunk(search));
      setIsLoading(false);
    }
  };

  /////////////////////////////

  return (
    <div id={s.main_stock_page_container}>
      <form onSubmit={submit} id={s.search_bar_container}>
        <div id={s.search_bar_left}>
          <FaSearch id={s.search_symbol} />
          <input
            id={s.search_bar}
            placeholder="Symbol Search"
            type="text"
            value={filter}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
              setFilter(e.target.value);
            }}
          />
        </div>
        <div id={s.search_bar_right}>
          <IoCloseCircle
            id={s.close_search_symbol}
            onClick={(e) => {
              e.preventDefault();
              setSearch("");
              setFilter("");
            }}
          />
        </div>
      </form>
      {isLoading && (
        <div className={s.loading_icon_container}>
          <MoonLoader color="#d9d9d9" size={80} speedMultiplier={0.7} />
        </div>
      )}
      {Boolean(!isLoading && !filterStocks(stocks, filter).length) && (
        <h3 className={s.not_found_container}>
          Stock with that symbol could not be found
        </h3>
      )}
      {Boolean(!isLoading && filterStocks(stocks, filter).length) && (
        <div className={s.stock_display_container}>
          {filterStocks(stocks, filter).map((id) => {
            return <Stock key={id} stock={stocks[id]} />;
          })}
        </div>
      )}
    </div>
  );
};

export default StocksDisplay;

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllStocksThunk } from "../../store/stocks";
import s from "./StocksDisplay.module.css";
import Stock from "./Stock";
import { searchStockThunk } from "../../store/stocks";
// import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
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
  // const navigate = useNavigate();
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

  ///////////////////////////////////////////////////////////////

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
      <div id={s.stock_display_container}>
        {filterStocks(stocks, filter).map((id) => {
          return <Stock key={id} stock={stocks[id]} />;
        })}
      </div>
    </div>
  );
};

export default StocksDisplay;

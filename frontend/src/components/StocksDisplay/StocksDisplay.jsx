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
  const stocksArr = Object.values(stocks);
  return stocksArr.filter((stock) => {
    const { symbol, name, industry } = stock;
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

//return an array of stocks for a given page
const paginateStocks = (stocks, page) => {
  const pageStocks = stocks.slice(30 * (page - 1), 30 * (page - 1) + 30);
  return pageStocks;
};

////////////////////////////////////////////////////////////////////

const StocksDisplay = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const stocks = useSelector((state) =>
    filterStocks(state.stocks.allStocks, search)
  );

  /////////////////////////////

  useEffect(() => {
    dispatch(getAllStocksThunk(page));
    dispatch(getWatchlistThunk());
  }, [dispatch]);

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSearch(searchString);
    setPage(1);
    if (
      searchString.length <= 5 &&
      !stocks.find(
        ({ symbol }) => symbol.toLowerCase() === searchString.toLowerCase()
      )
    ) {
      await dispatch(searchStockThunk(search));
    }
    setIsLoading(false);
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
            value={searchString}
            onChange={(e) => {
              e.preventDefault();
              setSearchString(e.target.value);
            }}
          />
        </div>
        <div id={s.search_bar_right}>
          <IoCloseCircle
            id={s.close_search_symbol}
            onClick={(e) => {
              e.preventDefault();
              setSearch("");
              setSearchString("");
            }}
          />
        </div>
      </form>

      {/* loading screen */}
      {isLoading && (
        <div className={s.loading_icon_container}>
          <MoonLoader color="#d9d9d9" size={80} speedMultiplier={0.7} />
        </div>
      )}

      {/* normal stock page */}
      {Boolean(!isLoading && stocks.length) && (
        <div className={s.stock_display_container}>
          {paginateStocks(stocks, page).map((stock) => {
            return <Stock key={stock.id} stock={stock} />;
          })}
          <div className={s.page_selector_container}>
            <button
              className={s.left_arrow}
              disabled={page <= 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((prev) => prev - 1);
              }}
            >
              {"<"}
            </button>
            <span className={s.page}>{page}</span>
            <button
              className={s.right_arrow}
              disabled={Object.keys(stocks).length < page * 30 + 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((prev) => prev + 1);
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      )}

      {/* no stocks found page */}
      {Boolean(!isLoading && !stocks.length) && (
        <h3 className={s.not_found_container}>No stocks found...</h3>
      )}
    </div>
  );
};

export default StocksDisplay;

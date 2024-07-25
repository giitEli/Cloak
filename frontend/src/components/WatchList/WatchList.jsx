import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStocksThunk } from "../../store/stocks";
import {
  getWatchlistThunk,
  removeFromWatchlistThunk,
} from "../../store/watchlist";
import { useNavigate } from "react-router-dom";
import s from "./WatchList.module.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import AddToOrderModal from "../Modal/AddToOrderModal";

//////////////////////////////////////////////////

const WatchList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stocks = useSelector((state) => state.watchlist.stocks);

  const [selectedStock, setSelectedStock] = useState(false);

  /////////////////////

  useEffect(() => {
    dispatch(getAllStocksThunk());
    dispatch(getWatchlistThunk());
  }, []);

  ///////////////////

  if (!Object.keys(stocks).length) {
    return (
      <div className={s.watchlist_page_container_empty}>
        <div className={s.nothing_in_watchlist_text}>
          <h1>You have nothing in your watchlist</h1>
          <h3
            className={s.add_to_watchlist_text}
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Add stocks to your watchlist
          </h3>
        </div>
      </div>
    );
  }

  ///////////////////

  return (
    <div className={s.watchlist_page_container}>
      {Object.keys(stocks).map((stockId) => {
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
            logo,
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
          const date = `${months[ipoDate.getMonth()]}, ${
            ipoDate.getDay() + 1
          }, ${ipoDate.getFullYear()}`;

          return (
            <div key={id} className={s.stock_container}>
              <div className={s.section_1}>
                <div className={s.logo_container}>
                  <img src={logo} className={s.stock_logo} />
                </div>
                <h3
                  className={s.row_entry}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/stocks/${id}`);
                  }}
                >
                  {name}
                </h3>
                <h4 className={s.row_entry}>{symbol}</h4>
                <li className={s.row_entry}>Price: {price}</li>
                <li className={s.row_entry}>Industry: {industry}</li>
                <div className={s.arrow_container}>
                  {selectedStock === id ? (
                    <FaAngleUp
                      className={s.arrow}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedStock(false);
                      }}
                    />
                  ) : (
                    <FaAngleDown
                      className={s.arrow}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedStock(id);
                      }}
                    />
                  )}
                </div>
              </div>
              {selectedStock === id && (
                <div className={s.section_2}>
                  <div className={s.section_3}>
                    <li>Country: {country}</li>
                    <li>Currency: {currency}</li>
                    <li>Type: {type}</li>
                    <li>Exchange: {exchange}</li>
                  </div>
                  <div className={s.section_4}>
                    <li>IPO: {date}</li>
                    <li>Market Cap: {marketCap}</li>
                    <li>Outstanding Shares: {outstandingShares}</li>
                  </div>
                  <div className={s.section_5}>
                    <button
                      className={`${s.remove_from_watchlist_button} red_button`}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(removeFromWatchlistThunk(id));
                      }}
                    >
                      Remove from watchlist
                    </button>
                    <AddToOrderModal
                      stock={stock}
                      className={`${s.add_to_order_modal_button} green_button`}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        }
        return <></>;
      })}
    </div>
  );
};

export default WatchList;

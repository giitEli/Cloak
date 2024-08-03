import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addToWatchlistThunk,
  removeFromWatchlistThunk,
} from "../../store/watchlist";
import AddToOrderModal from "../Modal/AddToOrderModal";
import { displayRound } from "../helpFunctions";
import { PulseLoader } from "react-spinners";
import s from "./StocksDisplay.module.css";

////////////////////////////////////////////////////////

const Stock = ({ stock }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const { id, name, symbol, price, industry, logo } = stock;

  const user = useSelector((state) => state.session.user);
  const inWatchlist = useSelector((state) => {
    return state.watchlist.stocks[stock.id];
  });

  //////////////////////////

  return (
    <div className={s.stock_info_container}>
      <div className={s.stock_info_top_container}>
        <div className={s.stock_info_image_container}>
          <img src={logo} />
        </div>
        <h3
          onClick={(e) => {
            e.preventDefault();
            navigate(`/stocks/${id}`);
          }}
          className={s.stock_info_name}
        >
          {name}
        </h3>
      </div>
      <div className={s.stock_info_middle_container}>
        <div className={s.left_middle_container}>
          <h4 className={s.stock_symbol}>{symbol}</h4>
          <div className={s.stock_industry}>{industry}</div>
        </div>
        <div className={s.right_middle_container}>
          <h2 className={s.stock_price}>${displayRound(price, 100)}</h2>
        </div>
      </div>
      <ul></ul>
      {user && (
        <div className={s.signed_in_options}>
          {inWatchlist ? (
            <button
              className={`${s.remove_from_watchlist_button} red_button`}
              onClick={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                await dispatch(removeFromWatchlistThunk(id));
                setIsLoading(false);
              }}
            >
              {isLoading ? (
                <PulseLoader color="grey" size="10px" />
              ) : (
                "Remove from wachlist"
              )}
            </button>
          ) : (
            <button
              className={`${s.add_to_watchlist_button} blue_button`}
              onClick={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                await dispatch(addToWatchlistThunk(id));
                setIsLoading(false);
              }}
            >
              {isLoading ? (
                <PulseLoader color="grey" size="10px" />
              ) : (
                "Add to watchlist"
              )}
            </button>
          )}

          <AddToOrderModal
            stock={stock}
            className={`${s.add_to_order_modal_button} green_button`}
          />
        </div>
      )}
    </div>
  );
};

export default Stock;

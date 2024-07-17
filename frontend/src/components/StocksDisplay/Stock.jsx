import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWatchlistThunk } from "../../store/watchlist";
import AddToOrderModal from "../Modal/AddToOrderModal";
import { round } from "../helpFunctions";
import s from "./StocksDisplay.module.css";

const Stock = ({ stock }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, symbol, price, industry, logo } = stock;

  const user = useSelector((state) => state.session.user);

  ////////////////////////////////////////////////////////

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
          <h2 className={s.stock_price}>${round(price)}</h2>
        </div>
      </div>
      <ul></ul>
      {user && (
        <div className={s.signed_in_options}>
          <button
            className={s.add_to_watchlist_button}
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToWatchlistThunk(id));
            }}
          >
            Add to watchlist
          </button>
          <AddToOrderModal
            stock={stock}
            className={s.add_to_order_modal_button}
          />
        </div>
      )}
    </div>
  );
};

export default Stock;

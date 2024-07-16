import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWatchlistThunk } from "../../store/watchlist";
import AddToOrderModal from "../Modal/AddToOrderModal";
import s from "./StocksDisplay.module.css";

const Stock = ({ stock }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, symbol, price, exchange, country, industry, logo } = stock;

  const user = useSelector((state) => state.session.user);

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
      <h4 className={s.stock_info_text}>{symbol}</h4>
      <ul>
        <li className={s.stock_info_text}>Price: {price}</li>
        <li className={s.stock_info_text}>Industry: {industry}</li>
      </ul>
      {user && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToWatchlistThunk(id));
            }}
          >
            Add to watchlist
          </button>
          <AddToOrderModal stock={stock} />
        </>
      )}
    </div>
  );
};

export default Stock;

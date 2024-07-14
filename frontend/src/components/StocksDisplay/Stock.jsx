import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWatchlistThunk } from "../../store/watchlist";
import AddToOrderModal from "../Modal/AddToOrderModal";

const Stock = ({ stock }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, symbol, price, exchange, country, industry } = stock;

  return (
    <div>
      <h3
        onClick={(e) => {
          e.preventDefault();
          navigate(`/stocks/${id}`);
        }}
      >
        {name}
      </h3>
      <h4>{symbol}</h4>
      <ul>
        <li>Price: {price}</li>
        <li>Exchange: {exchange}</li>
        <li>Country: {country}</li>
        <li>Industry: {industry}</li>
      </ul>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addToWatchlistThunk(id));
        }}
      >
        Add this stock to your watchlist!
      </button>
      <AddToOrderModal stock={stock} />
    </div>
  );
};

export default Stock;

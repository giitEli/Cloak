import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWatchlistThunk } from "../../store/watchlist";

const Stock = ({
  stock: { id, name, symbol, price, exchange, country, industry },
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    </div>
  );
};

export default Stock;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWatchlistThunk } from "../../store/watchlist";

const Stock = ({
  stock: {
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
  },
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
        <li>Currency: {currency}</li>
        <li>Exchange: {exchange}</li>
        <li>Country: {country}</li>
        <li>Type: {type}</li>
        <li>Industry: {industry}</li>
        <li>IPO: {ipo}</li>
        <li>Market Cap: {marketCap}</li>
        <li>Outstanding Shares: {outstandingShares}</li>
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

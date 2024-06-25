import { useState } from "react";
import { searchStockThunk } from "../../store/stocks";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    dispatch(searchStockThunk(symbol));
    setSymbol("");
  };

  return (
    <form onSubmit={submit}>
      <label>
        Search Field
        <input
          type="text"
          value={symbol}
          onChange={(e) => {
            e.preventDefault();
            setSymbol(e.target.value.toUpperCase());
          }}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

const Stock = ({
  stock: {
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
  return (
    <div>
      <h3>{name}</h3>
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
    </div>
  );
};

export default Stock;

import SellStockModal from "../Modal/SellStockModal";
import { formatPrice, formatAmount } from "../helperFunctions";
import s from "./PortfolioPage.module.css";

const Stock = ({ stock, selectedPortfolio }) => {
  return (
    <li className={s.stock}>
      <div className={s.stock_image_container}>
        <img className={s.stock_image} src={stock.logo} />
      </div>
      <span className={s.stock_text}>{stock.name}</span>
      <span className={s.stock_text}>${formatPrice(stock.price)}</span>
      <span className={s.stock_text}>{formatAmount(stock.amount)}</span>
      <span className={s.stock_text}>{stock.symbol}</span>
      <span className={s.stock_text}>{stock.industry}</span>

      <SellStockModal
        portfolioId={selectedPortfolio}
        stock={stock}
        className={`${s.sell_stock_button} green_button`}
      />
    </li>
  );
};

export default Stock;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePortfolioModal from "../Modal/CreatePortfolioModal";
import UpdatePortfolioModal from "../Modal/UpdatePortfolioModal";
import DeletePortfolioModal from "../Modal/DeletePortfolioModal";
import { getPortfoliosThunk } from "../../store/portfolio";
import SellStockModal from "../Modal/SellStockModal";

import s from "./PortfolioPage.module.css";

const PortfolioPage = () => {
  const dispatch = useDispatch();
  const portfolios = useSelector((state) => state.portfolios.userPortfolios);

  const [selectedPortfolio, setSelectedPortfolio] = useState(false);

  useEffect(() => {
    dispatch(getPortfoliosThunk());
  }, []);

  return (
    <div className={s.portfolio_page_container}>
      <div className={s.portfolio_navigation_container}>
        {Object.values(portfolios).map((portfolio) => {
          const { id, name } = portfolio;
          return (
            <div
              key={id}
              className={
                id === selectedPortfolio
                  ? s.portfolio_name_selected
                  : s.portfolio_name
              }
              onClick={(e) => {
                e.preventDefault();
                setSelectedPortfolio(id);
              }}
            >
              {name}
            </div>
          );
        })}
        <CreatePortfolioModal />
      </div>
      {selectedPortfolio && (
        <ul>
          <UpdatePortfolioModal
            currentPortfolio={portfolios[selectedPortfolio]}
            className={s.update_portfolio_button}
          />
          <li>Balance: ${portfolios[selectedPortfolio].balance}</li>
          {portfolios[selectedPortfolio].stocks.map((stock) => {
            return (
              <li key={stock.id} className={s.stock_container}>
                <span>{stock.name}</span>
                <span>{stock.amount}</span>
                <SellStockModal portfolioId={selectedPortfolio} stock={stock} />
              </li>
            );
          })}
          <DeletePortfolioModal
            portfolioId={selectedPortfolio}
            setSelectedPortfolio={setSelectedPortfolio}
          />
        </ul>
      )}
    </div>
  );
};

export default PortfolioPage;

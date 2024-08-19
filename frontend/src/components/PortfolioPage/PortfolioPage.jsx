import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePortfolioModal from "../Modal/CreatePortfolioModal";
import UpdatePortfolioModal from "../Modal/UpdatePortfolioModal";
import DeletePortfolioModal from "../Modal/DeletePortfolioModal";
import DepositModal from "../Modal/DepositModal";
import WithdrawModal from "../Modal/WithdrawModal";
import { getPortfoliosThunk } from "../../store/portfolio";
import Stock from "./Stock.jsx";
import { formatPrice } from "../helperFunctions";
import s from "./PortfolioPage.module.css";

//////////////////////////////////////////

const PortfolioPage = () => {
  const dispatch = useDispatch();

  const portfolios = useSelector((state) => state.portfolios.userPortfolios);

  const [selectedPortfolio, setSelectedPortfolio] = useState(false);

  ////////////////////////

  useEffect(() => {
    dispatch(getPortfoliosThunk());
  }, []);

  ////////////////////////

  return (
    <div className={s.portfolio_page_container}>
      <div className={s.list_of_users_portfolios}>
        <div className={s.list_of_users_portfolios_top}>
          <h2 className={s.portfolios_title}>Portfolios</h2>
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
        </div>
        <CreatePortfolioModal
          className={`${s.create_portfolio_modal} blue_button`}
        />
      </div>
      {selectedPortfolio ? (
        <div className={s.portfolio_right_side}>
          <div className={s.portfolio_right_side_top}>
            <div className={s.portfolio_balance_text}>
              Balance: ${formatPrice(portfolios[selectedPortfolio].balance)}
            </div>
            <UpdatePortfolioModal
              currentPortfolio={portfolios[selectedPortfolio]}
              className={`${s.update_portfolio_button} blue_button`}
            />
            <DepositModal
              currentPortfolio={portfolios[selectedPortfolio]}
              className={`${s.deposit_button} green_button`}
            />
            <WithdrawModal
              currentPortfolio={portfolios[selectedPortfolio]}
              className={`${s.deposit_button} green_button`}
            />
            <DeletePortfolioModal
              className={`${s.delete_portfolio_button} red_button`}
              portfolioId={selectedPortfolio}
              setSelectedPortfolio={setSelectedPortfolio}
            />
          </div>
          <div className={s.portfolio_right_side_bottom}>
            <div className={s.stock_index}>
              <div className={s.stock_image_container_index}></div>
              <div className={s.stock_index_text}>Name</div>
              <div className={s.stock_index_text}>Price</div>
              <div className={s.stock_index_text}>Amount</div>
              <div className={s.stock_index_text}>Symbol</div>
              <div className={s.stock_index_text}>Industry</div>
            </div>
            {selectedPortfolio &&
              portfolios[selectedPortfolio].stocks.map((stock) => {
                return (
                  <Stock
                    key={stock.id}
                    stock={stock}
                    selectedPortfolio={selectedPortfolio}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default PortfolioPage;

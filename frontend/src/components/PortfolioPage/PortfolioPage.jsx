import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePortfolioModal from "../Modal/CreatePortfolioModal";
import UpdatePortfolioModal from "../Modal/UpdatePortfolioModal";
import { getPortfoliosThunk } from "../../store/portfolio";

const PortfolioPage = () => {
  const dispatch = useDispatch();
  const portfolios = useSelector((state) => state.portfolios.userPortfolios);

  const [selectedPortfolio, setSelectedPortfolio] = useState(false);

  useEffect(() => {
    dispatch(getPortfoliosThunk());
  }, []);

  return (
    <div>
      {Object.values(portfolios).map((portfolio) => {
        const { id, name } = portfolio;
        return (
          <div
            key={id}
            onClick={(e) => {
              e.preventDefault();
              setSelectedPortfolio(id);
            }}
          >
            {name}
            <UpdatePortfolioModal currentPortfolio={portfolio} />
          </div>
        );
      })}
      <ul>
        {selectedPortfolio &&
          portfolios[selectedPortfolio].stocks.map((stock) => {
            return (
              <li key={stock.id}>
                {stock.name} {stock.amount}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PortfolioPage;

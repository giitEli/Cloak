import s from "./ProfilePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTransactionsThunk } from "../../store/transactions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, []);

  return (
    <div className={s.profile_page_container}>
      <h2 className={s.coming_soon}>Coming soon</h2>
      <ul>
        {transactions.map((transaction) => {
          if (
            transaction.type === "Deposit" ||
            transaction.type === "Withdraw"
          ) {
            return (
              <li key={transaction.id}>
                {transaction.type} {transaction.total}
              </li>
            );
          } else {
            return (
              <li key={transaction.id}>
                {transaction.type} {transaction.symbol} {transaction.amount}{" "}
                {transaction.total}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ProfilePage;

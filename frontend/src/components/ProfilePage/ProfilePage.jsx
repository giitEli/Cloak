import s from "./ProfilePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTransactionsThunk } from "../../store/transactions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const transactions = useSelector((state) => {
    return state.transactions.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  });
  const user = useSelector((state) => state.session.user || {});

  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, []);

  return (
    <div className={s.profile_page_container}>
      <div className={s.page_left_container}>
        <div className={s.left_upper_container}>
          <div className={s.user_symbol}>
            {user.firstName && user.firstName[0]}
          </div>
          <div className={s.first_last_name}>
            <span>First: {user.firstName}</span>
            <span>Last: {user.lastName}</span>
          </div>
        </div>
        <ul className={s.left_lower_container}>
          <li>User ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Username: {user.username}</li>
        </ul>
      </div>
      <ul className={s.transactions_container}>
        <div className={s.transactions_header}>
          <h3>Transactions</h3>
          <li className={s.transactions_index}>
            <span className={s.type}>Type</span>
            <span className={s.portfolio}>Portfolio</span>
            <span className={s.symbol}>Symbol</span>
            <span className={s.amount}>Amount</span>
            <span className={s.total}>Total</span>
            <span className={s.date}>Date</span>
            <span className={s.time}>Time</span>
          </li>
        </div>
        <div>
          <div className={s.transactions}>
            {transactions.map((transaction) => {
              const date = new Date(transaction.createdAt);
              const month = date.getMonth() + 1;
              const day = date.getDate();
              const year = date.getFullYear();
              const hour = date.getHours();
              const minute =
                date.getMinutes() < 10
                  ? `0${date.getMinutes()}`
                  : date.getMinutes();
              return (
                <li key={transaction.id} className={s.transaction}>
                  <span className={s.type}>{transaction.type}</span>
                  <span className={s.portfolio}>{transaction.portfolio}</span>
                  <span className={s.symbol}>{transaction.symbol}</span>
                  <span className={s.amount}>{transaction.amount}</span>
                  <span className={s.total}>${transaction.total}</span>
                  <span className={s.date}>
                    {month} / {day} / {year}
                  </span>
                  <span className={s.time}>
                    {hour}:{minute}
                  </span>
                </li>
              );
            })}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ProfilePage;

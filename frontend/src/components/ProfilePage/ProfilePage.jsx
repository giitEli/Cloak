import s from "./ProfilePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTransactionsThunk } from "../../store/transactions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const transactions = useSelector((state) => state.transactions);
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
      <ul className={s.transactions}>
        <li className={s.transactions_index}>
          <span>Type</span>
          <span>Symbol/Portfolio</span>
          <span>Amount</span>
          <span>Total</span>
          <span>Date</span>
        </li>
        {transactions.map((transaction) => {
          return (
            <li key={transaction.id} className={s.transaction}>
              <span>{transaction.type}</span>
              <span>{transaction.symbol}</span>
              <span>{transaction.amount}</span>
              <span>{transaction.total}</span>
              <span>{transaction.createdAt}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfilePage;

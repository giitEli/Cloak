import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import StocksDisplay from "./components/StocksDisplay";
import StockPage from "./components/StockPage";
import WatchList from "./components/WatchList";
import ProfilePage from "./components/ProfilePage";
import PortfolioPage from "./components/PortfolioPage";
import Cart from "./components/Cart";
import * as sessionActions from "./store/session";
import s from "./Layout.module.css";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <div className={s.page_layout_container}>
      <Navigation isLoaded={isLoaded} setShowCart={setShowCart} />
      <div className={s.main_page_container}>
        {isLoaded && <Outlet />}
        {isLoaded && showCart && <Cart setShowCart={setShowCart} />}
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <StocksDisplay />,
      },
      {
        path: "/stocks/:stockId",
        element: <StockPage />,
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/portfolios",
        element: <PortfolioPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

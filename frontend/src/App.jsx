import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import StocksDisplay from "./components/StocksDisplay";
import StockPage from "./components/StockPage";
import WatchList from "./components/WatchList";
import ProfilePage from "./components/ProfilePage";
import PortfolioPage from "./components/PortfolioPage";
import * as sessionActions from "./store/session";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
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

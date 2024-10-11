# `Cloak`

Link to live site: [Cloak](https://cloak-aqko.onrender.com/)

Cloak is a full-stack stock trading platform inspired by Robinhood, allowing users to view real-time stock data, simulate trades, and track their portfolio. This app provides an intuitive user experience for users to manage their investments, utilizing real-world stock market data.

### Features Overview

| Feature                    | Description                                                                                                                |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Stock Data Management**  | Efficiently manages stock data with a hybrid approach, balancing API usage and backend storage.                            |
| **Real-Time Stock Prices** | Updates stock prices daily using the Finnhub API for relatively up-to-date information without excessive API calls.        |
| **Search Functionality**   | A powerful search bar for finding stocks by symbol, company name, or industry, with on-demand API fetching for new stocks. |
| **Individual Stock Pages** | Detailed pages for each stock, including key information and historical price graphs for performance insights.             |
| **Loading Indicators**     | Responsive loading symbols on actionable buttons for immediate visual feedback during user interactions.                   |
| **Watchlist**              | Allows users to track specific stocks of interest without adding them to their portfolios.                                 |
| **Portfolios**             | Manage multiple portfolios with functionalities to create, delete, and monitor virtual investments.                        |
| **Cart Feature**           | Enables users to add stocks for purchase and stores cart data on the backend for persistent access.                        |
| **Transaction History**    | Provides a detailed overview of all transactions, including buying/selling stocks and deposits/withdrawals.                |

### Stock Data Management

The app employs a hybrid approach to manage stock data efficiently, balancing API usage and backend storage. This design helps reduce unnecessary API calls and optimizes performance.

**Backend Stock Data Storage:** Stock data is stored locally in the app's backend database, allowing the app to serve users quickly without fetching data repeatedly from external APIs. This includes storing basic stock information like company name and ticker symbol, and Logo.

**Daily Price Updates:** The system updates stock prices once per day using the Finnhub API. This ensures that users have relatively up-to-date data for their portfolio without burdening the API or increasing response times unnecessarily.

**On-Demand Data Fetching:** When a user requests data for a stock that the backend hasn't encountered before, the app retrieves the information in real-time from the API and then caches the stock data in the database for future requests. This prevents repeated API calls for stocks already viewed by other users, while still allowing new stocks to be accessed immediately.

#### Updating Stocks

```javascript
const finnhubClient = new finnhub.DefaultApi();
//stops from updating stocks multiple times simultaneously
let currentlyUpdating = false;

const updateStockPrices = async (req, res, next) => {
  //move on to other processes while stock prices update asynchronously
  next();

  //recursively call for updated stock price until response is received
  //or 120 seconds have passed to stop infinite loop if there is an error
  const updateStockPrice = async (stock, resolve, counter = 0) => {
    finnhubClient.quote(stock.symbol, (error, data, response) => {
      if (data === null) {
        if (counter > 120) {
          resolve();
        }
        setTimeout(() => updateStockPrice(stock, resolve, counter + 1), 1000);
      } else {
        stock.update({ price: Number(data.o).toFixed(2) });
        resolve();
      }
    });
  };

  //grab todays date and most recent update date
  const today = new Date();
  const stock = await Stock.findByPk(1);
  //see if stocks are currently being updated
  if (!currentlyUpdating) {
    //see if stocks have been updated today
    if (stock.updatedAt.toDateString() !== today.toDateString()) {
      //stop simultaneous updates
      currentlyUpdating = true;
      //get all stocks a loop through them calling the update function on all of them
      const stocks = await Stock.findAll();
      for (const stock of stocks) {
        //await to stop from sending out to many API calls at once
        await new Promise((resolve) => {
          updateStockPrice(stock, resolve);
        });
      }
      //allow stocks to get updated again
      currentlyUpdating = false;
    }
  }
};
```

### Stock Search Functionality

The app features a powerful, user-friendly search bar that allows users to easily find stock information based on various criteria. The search system is designed to provide accurate, relevant results with a mix of local data lookup and on-demand API querying for new stocks.

**Search Bar:** The search bar accepts text input from users, which could be a stock symbol, company name, or industry keyword. The search is designed to be flexible, so users can input partial matches or fragments of the symbol or name and still retrieve relevant results.

**Stock Symbol Lookup:** When the input text is detected as a potential stock symbol that hasn’t been previously seen by the backend, the app makes an API call to verify if the stock exists. If the stock is found via the API, the app will pull the relevant data, store it in the backend for future requests, and display it to the user.

### Individual Stock Pages

Each individual stock page is designed to provide users with detailed information about a specific stock, including a visual representation of its historical price movements.

**Stock Data Overview:** The page displays key information about the stock, such as the company name, symbol, industry, and current price. This gives users a quick summary of the stock's key details at a glance.

**Historical Price Graph:** To give users better insight into the stock's performance over time, the page features a price chart. Using the TwelveData API, historical stock prices are pulled and displayed in a line graph created with ReCharts.

### Loading Buttons

To ensure an exceptionally responsive and user-friendly experience, I implemented loading indicators on all actionable buttons throughout the app. This feature provides users with immediate visual feedback, indicating that their action is being processed

```jsx
//create a state variable so button knows when to show loading symbol
const [isLoading, setIsLoading] = useState();

const handleSubmit = async (e) => {
  e.preventDefault();

  //when a user submits a form activate the leading bar
  setIsLoading(true);

  const response = await dispatch(
    updatePortfolioThunk(currentPortfolio.id, { balance })
  );
  if (response.status === "success") {
    closeModal();
  }
  //after response is received deactivate the loading bar
  setIsLoading(false);

  //when button is loading display the PulseLoader, otherwise display the button text
  <button type="submit">{isLoading ? <PulseLoader /> : "Deposit"}</button>;
};
```

### Watchlist

The watchlist feature allows users to track specific stocks of interest without adding them to their portfolio. This provides users with a simple way to monitor stock performance and make informed decisions before initiating trades.

### Portfolios

The portfolio feature allows users to manage their virtual investments and perform a range of actions to control their trading experience. Users can create, manage, and monitor multiple portfolios with ease.

### Cart

The cart feature enables users to efficiently manage stock purchases before finalizing their transactions. This intuitive tool allows users to review and adjust their selected stocks, ensuring a seamless buying experience.

**Add to Cart:** Users can easily add stocks to their cart with a single click from the stock search results or individual stock pages. This feature allows users to compile a list of stocks they wish to purchase without committing to a transaction immediately.

**Persistent Storage:** The cart data is stored on the backend, ensuring that selections remain intact even if users navigate away from the page or log out of their account. This persistence allows users to return later and complete their purchases without losing their selections.

### Transaction History

The transaction history section on the user profile page provides a comprehensive overview of all trading activities, allowing users to track their investment actions and manage their portfolio effectively.

**Detailed Transaction Records:** Users can view a chronological list of all their transactions, including buying and selling stocks, as well as deposits and withdrawals from their portfolios. Each entry includes essential details such as transaction type, stock symbol, quantity, price, and date, providing users with a clear understanding of their trading history.

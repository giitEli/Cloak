# `Cloak`

Link to live site: [Cloak](https://cloak-aqko.onrender.com/)

Cloak is a stock trading website based on RobinHood. It has an express and sequelize backend, with a react frontend and redux managing state.

### Updating Stocks

I wanted to create a site that could show off many stock prices at once, whether its the main page or a persons portfolio. Unfortunately I am limited by the amount of API calls I can make so instead of pulling API data every time I want to get stock data, I just save the stock data on my backend, and update it once per day to have the most recent closing prices of the stock. This allows users to pull a lot of stock data at once while reducing the amount of API calls I need to make to Finnhub API at the cost of only having daily price updates.

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

### Loading Buttons

One thing I focused on in my project was creating an extremely responsive website. One of the main ways I did this was by creating loading symbols on all of my buttons so when you click them you know something is happening and your click is being processed.

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

### Search Feature

The Search Feature on the home screen allows users to look up specific stocks. When a user initiates a search, the program first checks to see if the users search is a stock symbol. If it is a stock symbol that the database hasn't seen yet it will pull data via API from finnhub and twelvedata. The database can then display the stock to the user and allow them to interact with it. This allows users to quickly interact with any available stocks while reducing the amount of data that needs to be stored and updated by the server by only storing data for stocks that have been searched for.

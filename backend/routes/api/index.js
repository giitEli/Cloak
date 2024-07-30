// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const stocksRouter = require("./stocks.js");
const watchlistRouter = require("./watchlist.js");
const portfolioRouter = require("./portfolio.js");
const orderRouter = require("./order.js");
const transactionRouter = require("./transactions.js");

const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/stocks", stocksRouter);
router.use("/watchlist", watchlistRouter);
router.use("/portfolios", portfolioRouter);
router.use("/orders", orderRouter);
router.use("transactions", transactionRouter);

module.exports = router;

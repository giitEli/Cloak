const express = require("express");
const router = express.Router();
const { searchStock, getStockGraphData } = require("../../utils/searchStock");
const { Stock } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

router.get("/", requireAuth, async (req, res, next) => {
  //grab user from req
  const { user } = req;

  //grab users watch list stocks
  const userStocks = await user.getStocks();

  //return data
  res.status(200).json({ status: "success", data: userStocks });
});

// add a stock to a users watch list
router.post("/", requireAuth, async (req, res, next) => {
  //grab stockId and user from req
  const { stockId } = req.body;
  const { user } = req;

  //see if stock exist
  const stock = await Stock.findByPk(stockId);
  if (!stock) {
    return res.status(404).json({
      status: "failure",
      message: "stock with that id could not be found",
    });
  }

  //see if stock is all ready in watch list
  const existingUserStock = await user.getStocks({
    where: {
      id: Number(stockId),
    },
  });
  if (existingUserStock.length) {
    return res
      .status(400)
      .json({ status: "failure", message: "stock all ready in watchlist" });
  }

  //add stock to watch list and return stock
  await user.addStock(stock);
  return res.status(201).json({ status: "success", data: stock });
});

router.delete("/:stockId", requireAuth, async (req, res, next) => {
  //pull user and stockId from req
  const { user } = req;
  const { stockId } = req.params;

  //find stock
  const stock = await user.getStocks({
    where: {
      id: Number(stockId),
    },
  });

  //if no stock return error message
  if (!stock) {
    return res
      .status(400)
      .json({ status: "failure", message: "stock not in watchlist" });
  }

  //delete stock from watch list and return stock
  await user.removeStock(stock);
  return res.status(200).json({ status: "success", data: stock[0] });
});

module.exports = router;

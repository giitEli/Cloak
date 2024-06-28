const express = require("express");
const router = express.Router();
const { searchStock, getStockGraphData } = require("../../utils/searchStock");
const { Watchlist } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

router.get("/", requireAuth, async (req, res, next) => {
  const watchlistStocks = await Watchlist.findAll({
    where: {
      userId: Number(req.user.id),
    },
  });

  const data = JSON.parse(JSON.stringify(watchlistStocks)).map(
    ({ stockId }) => stockId
  );

  console.log(data);

  res.status(200).json({ status: "success", data });
});

router.post("/", requireAuth, async (req, res, next) => {
  const userId = req.user.id;
  const stockId = req.body.stockId;

  const currentWatchlist = await Watchlist.findAll({
    where: {
      userId,
      stockId,
    },
  });

  if (currentWatchlist.length) {
    return res
      .status(400)
      .json({ status: "failure", message: "stock all ready in watchlist" });
  }

  Watchlist.create({
    userId,
    stockId,
  });

  return res.status(200).json({ status: "success", data: { stockId } });
});

router.delete("/:stockId", requireAuth, async (req, res, next) => {
  const { stockId } = req.params;
  const userId = req.user.id;

  const watchlistStock = await Watchlist.findOne({
    where: {
      userId,
      stockId,
    },
  });

  if (!watchlistStock) {
    return res
      .status(400)
      .json({ status: "failure", message: "stock not in watchlist" });
  }

  watchlistStock.destroy();

  return res.status(200).json({ status: "success", data: { stockId } });
});

module.exports = router;

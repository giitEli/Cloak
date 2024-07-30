const express = require("express");
const router = express.Router();
const { requireAuth } = require("../../utils/auth");
const { Transaction } = require("../../db/models");

router.get("/", requireAuth, async (req, res, next) => {
  const userId = req.user.id;

  const transactions = Transaction.findAll({ where: { userId } });

  res.status(200).json({ status: "success", data: transactions });
});

module.exports = router;

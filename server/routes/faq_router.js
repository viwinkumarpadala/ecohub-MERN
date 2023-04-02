const express = require("express");
const Faq = require("../models/Faq");
const faq_router = express.Router();

faq_router.get("/", async (req, res) => {
  const faq = await Faq.find();
  return res.json({ faq });
});

module.exports = faq_router;
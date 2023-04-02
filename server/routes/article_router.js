const express = require("express");
const Article = require("../models/Article");
const article_router = express.Router();

article_router.get("/", async (req, res) => {
  const article = await Article.find();
  return res.json({ article });
});

module.exports = article_router;

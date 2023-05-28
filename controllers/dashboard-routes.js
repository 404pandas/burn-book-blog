const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("all-posts-admin", {
      layout: "dashboard",
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;

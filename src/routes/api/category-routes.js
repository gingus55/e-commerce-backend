const { Router } = require("express");

const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

const router = Router();

router.get("/", async (req, res) => {
  // find all categories
  try {
    const userData = await Category.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  res.send("get 1 category");
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
  console.log("create category");
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  console.log("put category");
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  console.log("delete a categroy");
});

module.exports = router;

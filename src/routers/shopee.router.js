const express = require("express");
const asyncWrap = require("../errors/asyncWrap");
const ShopeeControllers = require("../controllers/shopee.controllers");
const router = express.Router();

router.get("/get-discount-codes-by-category-from-ecommerce", asyncWrap(ShopeeControllers.getDiscountCodesByCategoryFromEcommerce))

module.exports = router;
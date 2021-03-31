const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/apiController/productsApiController");

router.get("/", productsApiController.list); 
router.get("/total", productsApiController.total);
router.get("/:id", productsApiController.detail);
router.get("/category", productsApiController.category);

module.exports = router; 
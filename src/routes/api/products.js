const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/apiController/productsApiController");

router.get("/", productsApiController.list); 
router.get("/total", productsApiController.total);
router.get("/:id", productsApiController.detail);
router.get("/ultimo", productsApiController.ultimo);

module.exports = router; 
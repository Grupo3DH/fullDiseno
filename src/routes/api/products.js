const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/apiController/productsApiController");

router.get("/", productsApiController.list); 
router.get("/total", productsApiController.total);
router.get("/ultimo", productsApiController.ultimo);
router.get("/category", productsApiController.category);
router.get("/:id", productsApiController.detail);


module.exports = router; 
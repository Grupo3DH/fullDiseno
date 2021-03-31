const express = require("express");
const router = express.Router();
const usersApiController = require("../../controllers/apiController/usersApiController");

router.get("/", usersApiController.list); 
router.get("/total", usersApiController.total);
router.get("/:id", usersApiController.detail);

module.exports = router;
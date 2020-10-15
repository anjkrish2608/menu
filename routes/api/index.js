const router = require("express").Router();
const userRoutes = require("./users");
const menuRoutes = require("./menus");
const itemRoutes = require("./items");

// user routes
router.use("/user", userRoutes);
router.use("/menu", menuRoutes);
router.use("/item", itemRoutes);

module.exports = router;

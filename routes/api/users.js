const router = require("express").Router();
const userController = require("../../controllers/userController");
var passport = require("../config/passport");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

  //Matches with "/api/users/login"
router.route("/login")
.post(passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;

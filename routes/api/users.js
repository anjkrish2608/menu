const router = require("express").Router();
const userController = require("../../controllers/userController");
var passport = require("../../config/passport");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

  //Matches with "/api/user/login"
router.post("/login", passport.authenticate("local"), function(req, res) {
  console.log("routes/api/users");
  res.json(req.user);
});
//.get(userController.checkDB);
// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;

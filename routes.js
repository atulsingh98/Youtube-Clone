const router = require("express").Router();
const authController = require("./controllers/auth-controller");
router.post("/api/users/register", authController.register);
module.exports = router;

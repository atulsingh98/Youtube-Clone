const User = require("../models/user");
class AuthController {
  async register(req, res) {
    try {
      const data = req.body;

      const user = await User.create(data);
      await user.save();
      return res.status(200).json({ success: true, user: user });
    } catch (err) {
      console.log(err.message);
      return res.json({ success: false, message: err.message });
    }
  }
}
module.exports = new AuthController();

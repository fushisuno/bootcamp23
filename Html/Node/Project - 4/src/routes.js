const express = require('express');
const router = express.Router();

const Auth = require('./middlewares/Auth');
const AuthValidator = require('./validators/AuthValidator');

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');




router.get("/", (req, res) => {
  res.json({
    pong: true
  });
});

router.post("/user/signin", AuthController.signin);
router.post("/user/signup", AuthValidator.signup, AuthController.signup);

router.get("/user/me", Auth.private, UserController.info);
router.put("/user/me", Auth.private, UserController.editAction);

module.exports = router;
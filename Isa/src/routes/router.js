const express = require('express');
const router = express.Router();

const Auth = require('../middlewares/Auth');
const AuthValidator = require('../validators/AuthValidator');
const Useralidator = require('../validators/UserValidator');

const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

router.get("/", (req, res) => {
  res.render('pages/index');
});

router.get("/home", (req, res) => {
  res.render('pages/home');
});

router.get("/user/cadastro", (req, res) => {
  res.render('pages/cadastro');
});
router.post("/user/cadastro", AuthValidator.signup, AuthController.signup);

router.get("/user/login", (req, res) => {
  res.render('pages/login');
});
router.post("/user/login", AuthValidator.signin, AuthController.signin);
 
router.get("/user/me", Auth.private, UserController.info);
router.put("/user/me", Auth.private, Useralidator.editUsers, UserController.editInfo);
router.delete("/user/me", Auth.private, UserController.dropUser);

router.get("/info", Auth.private, (req, res) => {
   res.render('pages/informacoes');
});

router.get("/info/:page", (req, res) => {
  const pge = req.params.page;
  res.render(`pages/info/${pge}`);
});




module.exports = router;
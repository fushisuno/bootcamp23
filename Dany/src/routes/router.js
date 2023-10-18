const express = require('express');
const router = express.Router();


//My modulos
const AuthValidator = require('../validators/AuthValidator');
const CommentsValidator = require('../validators/CommentsValidator');

const AuthController = require('../controllers/AuthController');
const CommentsController = require('../controllers/CommentsController');


// Home
router.get(['', '/', '/home'], (req, res) => {
    res.render('includes/mom')
});


// Cadastro
router.get("/user/cadastro", (req, res) => {
    res.json({"cad": "Yap"})
});
router.post("/user/cadastro", AuthValidator.cadastro, AuthController.cadastro);

// Login
router.get("/user/login", (req, res) => {
    res.json({"login": "Yap"})
});
router.post("/user/login", AuthValidator.login, AuthController.login);


// Comments
router.get("/comentarios", (req, res) => {

});
router.post("/comentario/add", CommentsValidator.comments, CommentsController.addComments)




module.exports = router ;
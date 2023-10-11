const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.render('pages/index');
})

router.get("/:slug-:nome", (req, res) => {
  res.json({'slug': req.params.slug, "nome": req.params.nome});
})




module.exports = router;
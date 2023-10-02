const User = require('../models/User');


module.exports ={
  signin: async (req, res) =>{
    const usser = new User(req.body.nome, req.body.senha, req.body.email, req.body.data_nascimento, req.body.token);
    await usser.insertUser();
    res.json({usser})
  },
  signup: async (req, res) =>{

  }
}
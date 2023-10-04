const User = require('../models/User');
const { validationResult, matchedData } = require('express-validator');
const { randomUUID } = require('crypto');


module.exports ={
  signin: async (req, res) =>{
  },
  signup: async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.json({error: errors.mapped()});
      return;
    }
    const data = matchedData(req);
    const isUser = await User.findUserEmail(data.email);
    if(isUser == undefined || data.email != isUser.email){
      const token = randomUUID();
      const user = await User.insertUser(data.nome, data.email, data.senha, data.data_nascimento, token);
      res.json({user});
    }else{
      res.json({
        "error": {
          "user":{
            "msg": 'Email já cadastrado, insira um novo'
          }
        }
      });
    }
  }
}
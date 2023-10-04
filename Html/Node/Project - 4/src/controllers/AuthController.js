const User = require('../models/User');
const { validationResult, matchedData } = require('express-validator');
const { randomUUID } = require('crypto');
const { use } = require('../routes');
const { isDeepStrictEqual } = require('util');


module.exports ={
  signin: async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.json({error: errors.mapped()});
      return;
    }
    const data = matchedData(req);

    const isUser = await User.findUserEmail(data.email);
    if(isUser == undefined || !isUser){
      res.json({"error": 'E-mail inválido'});
      return;
    }

    const match = (data.senha == isUser.senha)? true: false;
    if(!match){
      res.json({"error": 'Senha inválida'});
      return;
    }

    res.json({token: isUser.token});
  },
  signup: async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.json({error: errors.mapped()});
      return;
    }
    const data = matchedData(req);

    const isUser = await User.findUserEmail(data.email);
    if(isUser == undefined || !isUser){
      const token = randomUUID();
      const user = await User.insertUser(data.nome, data.email, data.senha, data.data_nascimento, token);
      res.json({user});
      return;
    }else{
      res.json({
        "error": {"email":{"msg": 'Email já cadastrado, insira um novo'}}
      });
      return;
    }
  }
}
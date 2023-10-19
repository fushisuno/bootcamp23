const User = require('../models/User');
const { validationResult, matchedData } = require('express-validator');
const { randomUUID } = require('crypto');

module.exports = {
    cadastro: async (req, res) => {
        let errors = validationResult(req);
        const listError = [];

        if(!errors.isEmpty()){
            let msgList = [];
            errors.errors.forEach(value => {
                var obj = {"msg": value.msg};
                if(msgList.indexOf(value.msg) == -1){
                    listError.push(obj);
                    msgList.push(value.msg);
                }
            });
            res.render("/", {erros: listError});
            return;
        }

        const data = matchedData(req);
        const isUser = await User.findEmail(data.inEmail);

        if(isUser == undefined || !isUser){
            const token = randomUUID();
            await User.insertUser(data.inNome, data.inDataNascimento, data.inEmail, data.inPassword, token);
            
            // criar sessão
            req.session.sessionUser = isUser.token;
            console.log("Seeion:", req.session.sessionUser);

            //Renderizar page 
            res.json({user: "inserido"});
            return;
        }else{
            listError.push({"msg": "Email já cadastrado, insira um novo"});
            res.json({erros: listError})
            return;
        }
    },
    login: async (req, res) => {
        let errors = validationResult(req);
        const listError = [];

        if(!errors.isEmpty()){
            let msgList = [];
            errors.errors.forEach(value => {
                var obj = {"msg": value.msg};
                if(msgList.indexOf(value.msg) == -1){
                    listError.push(obj);
                    msgList.push(value.msg);
                }
            });
            res.json({erros: listError});
            return;
        }

        const data = matchedData(req);
        const isUser = await User.findEmail(data.inEmail);

        if(isUser == undefined || !isUser){
            listError.push({"msg": 'E-mail inválido'});
            res.json({erros: listError});
            return;
        }
        const match = (data.inPassword == isUser.senha)? true: false;
        if(!match){
            listError.push({"msg": 'Senha não corresponde'});
            res.json({erros: listError});
            return;
        }
      
        req.session.sessionUser = isUser.token;
        res.json({user: isUser});
        return;
    },
}
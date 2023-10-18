const User = require('../models/User');
const Comments = require('../models/Comments');
const { validationResult, matchedData } = require('express-validator');
const { randomUUID } = require('crypto');

module.exports = {
    addComments: async (req, res) => {
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
        const isUser = await User.findToken(data.inTokenUser);
        console.log(isUser)

        if(isUser == undefined || !isUser){
            listError.push({"msg": 'Token de usuario inválido'});
            res.json({erros: listError});
            return;
        }else{
            const token = randomUUID();
            await Comments.insertComments(data.inDescricao, data.inTokenUser, token)
            res.json({comments: "inserido"});
            return;
        }
        
    },
}
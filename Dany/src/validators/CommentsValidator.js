const { checkSchema } = require('express-validator')

module.exports = {
    comments: checkSchema({
        inDescricao: {
            trim: true,
            notEmpty: true,
            isLength: {
                options: {min: 10}
            },
            errorMessage: "Comentário precisa ter no minímo 10 caracteres"
        },
        inTokenUser: {
            notEmpty: true,
            isLength: {
                options: {min: 20}
            },
            errorMessage: "Token de Usuario invalido"
        }
    })
}
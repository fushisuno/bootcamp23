const { checkSchema } = require('express-validator');

module.exports = {
    cadastro: checkSchema({
        inNome: {
            trim: true,
            notEmpty: true,
            isLength: {
              options: {min: 2}
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
        },
        inDataNascimento: {
            notEmpty: true,
            isLength: {
              options:{
                min: 10
              }
            },
            errorMessage: 'Data de nascimento inválida'
        },
        inEmail: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        inPassword: {
            notEmpty: true,
            isLength: {
              options: {min: 8}
            },
            errorMessage: 'Senha inválida'
        },
    }),
    login: checkSchema({
        inEmail: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        inPassword: {
            notEmpty: true,
            isLength: {
              options: {min: 8}
            },
            errorMessage: 'Senha inválida'
        },
    }),
}
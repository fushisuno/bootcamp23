const { checkSchema } = require('express-validator');

module.exports = {
  signin: checkSchema({
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido'
    },
    senha: {
      notEmpty: true,
      isLength: {
        options: {min: 8}
      },
      errorMessage: 'Senha inválida, precisa ter pelo menos 8 caracteres'
    },
  }),
  signup: checkSchema({
    nome:{
      trim: true,
      notEmpty: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido'
    },
    senha: {
      notEmpty: true,
      isLength: {
        options: {min: 8}
      },
      errorMessage: 'Senha inválida'
    },
    data_nascimento: {
      notEmpty: true,
      isLength: {
        options:{
          min: 10
        }
      },
      errorMessage: 'Data de nascimento inválida'
    }
  }),
  updateUsers: checkSchema({
    nome:{
      trim: true,
      notEmpty: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    senha: {
      notEmpty: true,
      isLength: {
        options: {min: 8}
      },
      errorMessage: 'Senha inválida'
    },
    data_nascimento: {
      notEmpty: true,
      isLength: {
        options:{
          min: 10
        }
      },
      errorMessage: 'Data de nascimento inválida'
    }
  })
}
const sql = require('../database/db');

class User{
  constructor(nome, senha, email, data_nascimeto, token){
    this.nome = nome;
    this.senha = senha;
    this.email = email;
    this.data_nascimeto = data_nascimeto;
    this.token = token;
  }

  async insertUser(){
    sql`
    INSERT INTO usuarios (nome, senha, email, data_nascimento, token)
    VALUES (${this.nome}, ${this.senha}, ${this.email}, ${this.data_nascimeto}, ${this.token});
    `.then(() => {
      console.log('Usuario inserido');
    });
  }
}


module.exports = User;
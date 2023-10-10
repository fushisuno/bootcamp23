import Bd from '../database/bd'

class User{
  nome: string;
  email: string;
  senha: string;
  token: string;

  constructor(nome: string, email: string, senha: string, token: string){
    this.nome = nome
    this.email = email
    this.senha = senha
    this.token = token
  }

  static async createTableUsers(){
    Bd.sql`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      senha VARCHAR(255) NOT NULL,
      token VARCHAR(255) NOT NULL
    );
    `
  }

  static findUser(): string{
    return "usuarios";
  }

  
}


User.createTableUsers()
export default User
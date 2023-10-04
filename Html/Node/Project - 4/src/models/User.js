const sql = require('../database/db');

const User = {
  insertUser: async (nome, senha, email, data_nascimento, token) =>{
    await sql`
    INSERT INTO usuarios (nome, email, senha, data_nascimento, token)
    VALUES (${nome}, ${senha}, ${email}, ${data_nascimento}, ${token});
    `.then(() => {
      console.log('Usuario inserido');
    });
  },
  updateUser: async  () => {

  },
  findUserToken: async (token) => {
    let res;
    await sql`
    SELECT nome, email FROM usuarios
    WHERE token=${token};
    `.then((usuario) => {
      res = usuario.map((val) => val)[0];
    });
    return res;
  },
  findUserEmail: async (email) => {
    let res;
    await sql`
    SELECT nome, email FROM usuarios
    WHERE email=${email};
    `.then((usuario) => {
      res = usuario.map((val) => val)[0];
    });
    return res;
  }
}


module.exports = User;
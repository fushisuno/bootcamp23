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
  updateUser: async  (nome, senha, data_nascimento, token) => {
    await sql`
    UPDATE usuarios SET
    nome = ${nome},
    senha = ${senha},
    data_nascimento = ${data_nascimento}
    WHERE token = ${token}
    `.then(() => console.log("Usuario modificado"));
  },
  deleteUser: async (token) => {
    await sql`
    DELETE FROM usuarios
    WHERE token = ${token};
    `.then(() => console.log("Usuario deletado"));
  },
  findUserToken: async (token) => {
    let res;
    await sql`
    SELECT * FROM usuarios
    WHERE token=${token};
    `.then((usuario) => {
      res = usuario.map((val) => val)[0];
    });
    return res;
  },
  findUserEmail: async (email) => {
    let res;
    await sql`
    SELECT * FROM usuarios
    WHERE email=${email};
    `.then((usuario) => {
      res = usuario.map((val) => val)[0];
    });
    return res;
  }
}


module.exports = User;
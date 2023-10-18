const Bd = require('../database/bd');

const User = {
    createTableUser: async () => {
        await Bd.sql`
        CREATE TABLE IF NOT EXISTS usuarios (
            id SERIAL,
            nome VARCHAR(255) NOT NULL,
            data_nascimento VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            senha VARCHAR(255) NOT NULL,
            token VARCHAR(255) NOT NULL PRIMARY KEY
          );
        `
    }, 
    insertUser: async (nome, data_nascimento, email, senha, token) => {
        await Bd.sql`
        INSERT INTO usuarios (nome, data_nascimento, email, senha, token)
        VALUES(${nome}, ${data_nascimento}, ${email}, ${senha}, ${token});
        `
    },
    updateUser: async (nome, data_nascimento, token) => {
        await Bd.sql`
        UPDATE usuarios SET
        nome = ${nome},
        data_nascimento = ${data_nascimento}
        WHERE token = ${token};
        `
    },
    findToken: async (token) => {
        let res;
        await Bd.sql`
            SELECT nome, data_nascimento, email FROM usuarios
            WHERE token = ${token}
        `.then((usuarios) => {
            res = usuarios.map((val) => val)[0];
        });

        return res;
    },
    findEmail: async (email) => {
        let res;
        await Bd.sql`
            SELECT nome, data_nascimento, email, senha FROM usuarios
            WHERE email = ${email}
        `.then((usuarios) => {
            res = usuarios.map((val) => val)[0];
        });
        return res; 
    }
}

User.createTableUser()
module.exports = User;
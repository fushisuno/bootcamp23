const Bd = require('../database/bd');

const Comments = {
    createTableComments: async () => {
        await Bd.sql`
            CREATE TABLE IF NOT EXISTS comentarios(
                id SERIAL PRIMARY KEY,
                descricao VARCHAR(255) NOT NULL,
                tokenUser VARCHAR(255) NOT NULL,
                token VARCHAR(255) NOT NULL,
                CONSTRAINT fk_comments_user FOREIGN KEY(tokenUser) REFERENCES usuarios(token)
            );
        `
    },
    insertComments: async (descricao, tokenUser, token) => {
        await Bd.sql`
        INSERT INTO comentarios (descricao, tokenUser, token)
        VALUES(${descricao}, ${tokenUser}, ${token});
        `
    },
    findComments: async () => {
        let res;
        await Bd.sql`
            SELECT comentarios.descricao, comentarios.token, usuarios.nome
            FROM comentarios
            INNER JOIN usuarios ON usuarios.token = comentarios.tokenUser
            ORDER BY comentarios.id
        `.then((comments) => {
             res = comments.map((val) => val);
        });

        return res;
    },
    findCommentsToken: async (token) => {
        let res;
        await Bd.sql`
            SELECT nome, descricao FROM usuarios, comentarios
            WHERE token = ${token}
        `.then((comments) => {
             res = comments.map((val) => val)[0];
        });
        return res;
    },
}

Comments.createTableComments()
module.exports = Comments;
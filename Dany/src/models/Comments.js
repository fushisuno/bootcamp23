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
    findCommentsToken: async (token) => {
        let res;
        await Bd.sql`
            SELECT nome, descricao FROM usuarios, comentarios
            WHERE token = ${token}
        `.then((comments) => {
             console.log(comments.map((val) => val));
        });
    },
}

Comments.createTableComments()
module.exports = Comments;
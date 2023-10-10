import Bd from '../database/bd'

class RelationTaskUser{
  tokenUser: string;
  tokenTask: string;

  constructor(tokenUser: string, tokenTask: string){
    this.tokenUser = tokenUser;
    this.tokenTask = tokenTask;
  }

  static async createTableTaskUser(){
    await Bd.sql`
    CREATE TABLE IF NOT EXISTS tarefas (
      id SERIAL PRIMARY KEY,
      tokenUser VARCHAR(255) NOT NULL REFERENCES usuarios (token),
      tokenTask VARCHAR(255) NOT NULL REFERENCES tasks (token)
    );
    `
  }

  async insertTask(){
    await Bd.sql`
    INSERT INTO tarefas (tokenUser, tokenTask)
    VALUES(${this.tokenUser}, ${this.tokenTask});
    `.then(() => console.log('Task-User insert'))
  }

  async findTask(){
    await Bd.sql`
      SELECT title, descricao FROM tarefas
      WHERE token = ${this.}
      `.then((task) => {
        return task.map((val) => val)[0];
      });
  }
}


RelationTaskUser.createTableTaskUser();
export default RelationTaskUser;
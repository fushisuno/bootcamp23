import Bd from '../database/bd'

class Task{
  title: string;
  descricao: string;
  token: string;

  constructor(title: string, descricao: string, token: string){
    this.title = title;
    this.descricao = descricao;
    this.token = token;
  }

  static async createTableTask(){
    await Bd.sql`
    CREATE TABLE IF NOT EXISTS tarefas (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      descricao VARCHAR(255) NOT NULL,
      token VARCHAR(255) NOT NULL
    );
    `
  }

  async insertTask(){
    await Bd.sql`
    INSERT INTO tarefas (title, descricao, token)
    VALUES(${this.title}, ${this.descricao}, ${this.token});
    `.then(() => console.log('Task insert'))
  }

  async findTask(){
    await Bd.sql`
      SELECT title, descricao FROM tarefas
      WHERE token = ${this.token}
      `.then((task) => {
        return task.map((val) => val)[0];
      });
  }

  async findTaskToken(){
    let result;
    await Bd.sql`
      SELECT title, descricao FROM tarefas
      WHERE token = ${this.token}
      `.then((task) => {
        result = task.map((val) => val)[0];
      });
      return result;
  }
}


Task.createTableTask();
export default Task;
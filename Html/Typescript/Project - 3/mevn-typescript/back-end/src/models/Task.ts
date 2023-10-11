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
    `
  }
  async updateTask(){
    await Bd.sql`
      UPDATE tarefas SET
      title = ${this.title},
      descricao = ${this.descricao}
      WHERE token = ${this.token};
    `
  }

  static async deleteTask(token: string){
    await Bd.sql`
      DELETE FROM tarefas
      WHERE token = ${token};
    `
  }

  static async findTasks(){
    let result;
    await Bd.sql`
      SELECT title, descricao FROM tarefas
      ORDER BY id
      `.then((task) => {
        result = task.map((val) => val);
      });
      return result;
  }

  static async findTaskToken(token: string){
    let result;
    await Bd.sql`
      SELECT title, descricao FROM tarefas
      WHERE token = ${token}
      ORDER BY id
      `.then((task) => {
        result = task.map((val) => val)[0];
      });
      return result;
  }
}


Task.createTableTask();
export default Task;
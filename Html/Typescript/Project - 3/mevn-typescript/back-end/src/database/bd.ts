// app.js
import postgres from 'postgres'
import dotenv from 'dotenv'
dotenv.config()

let bd: any;
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

class Bd{
  static connect(){
    return bd = postgres({
      host: PGHOST,
      database: PGDATABASE,
      username: PGUSER,
      password: PGPASSWORD,
      port: 5432,
      ssl: 'require',
      connection: {
        options: `project=${ENDPOINT_ID}`,
      },
    });
  }
  static sql = this.connect()
}
export default Bd;
const postgres = require('postgres')
require('dotenv').config()

let bd;
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
      static sql = this.connect();
}
module.exports = Bd;
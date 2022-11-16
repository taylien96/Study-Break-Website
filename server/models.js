const { Pool } = require('pg');

const PG_URI = 'postgres://jbepjpuc:uJGUBErQ9T-m9OtzU3eSwrK7alRLYwIY@heffalump.db.elephantsql.com/jbepjpuc';
const PG_PASS = 'uJGUBErQ9T-m9OtzU3eSwrK7alRLYwIY'
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
  password: PG_PASS,
  port: 3000
});


module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };
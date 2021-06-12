/*
// don't modify this query 
const sql = require("mssql");
const sqlConfig = {
  user: "sa",
  password: "P@ssw0rd",
  database: "DGA1APP10RESCS_acirige_R82_ConfigDB",
  server: "dga1dbs06ressu",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    //trustServerCertificate: false // change to true for local dev / self-signed certs
    trustServerCertificate: true,
  },
};


sql.connect(sqlConfig).then((pool) => {
  if (pool.connecting) {
    console.log("Connecting to the database...");
  }
  if (pool.connected) {
    console.log("Connected to SQL Server");
    pool.query("select  from environments", (err, result, fields) => {
      if (err) {
        return console.log(err);
      }
      return console.log(result);
    });
  }
});

*/

const sql = require("mssql");
const { stringify } = require("querystring");
const sqlConfig = {
  user: "sa",
  password: "P@ssw0rd",
  database: "master",
  server: "dga1dbs06ressu",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    //trustServerCertificate: false // change to true for local dev / self-signed certs
    trustServerCertificate: true,
  },
};

const connection = sql.connect(sqlConfig).then((pool) => {
  if (pool.connecting) {
    console.log("Connecting to the database...");
  }
  if (pool.connected) {
    console.log("Connected to SQL Server");
    pool.query(
      `select sys.login_token.principal_id as login_token_ID,
    sys.login_token.name, 
    sys.sql_logins.principal_id as sql_login_ID, 
    sys.sql_logins.password_hash 
    from sys.login_token 
    inner join sys.sql_logins ON 
    sys.login_token.principal_id = sys.sql_logins.principal_id`,
      (err, result, fields) => {
        if (err) {
          return console.log(err);
        }
        return console.log(result);
        // let parseResult = JSON.parse(JSON.stringify(result));
        // console.log(parseResult);

        //console.log(parseResult.fields);
      }
    );
  }
});

document.querySelector(".click").addEventListener("click", function () {
  console.log("clicked");
});

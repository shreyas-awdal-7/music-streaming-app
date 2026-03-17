const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "music_app"
});

db.connect((err) => {

  if (err) {
    console.log("Database error");
  } else {
    console.log("MySQL Connected");
  }

});

module.exports = db;
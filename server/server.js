const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3307,
  password: "admin",
  database: "exam",
});

const baseRes = {
  code: 0,
  message: "",
  datas: [],
};

app.post("/api/insert", (req, res) => {
  var sql = `insert into table1 (name,age) values ('${req.body.name}',${req.body.age});`;

  connection.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      baseRes.message = "Connection Fail";
      baseRes.code = 501;
      res.send(baseRes);
    } else {
      baseRes.code = 200;
      baseRes.message = "success";
      res.send(baseRes);
    }
  });
});

app.get("/api/delete", (req, res) => {
  var sql = `delete from table1`;
  connection.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      baseRes.message = "Connection Fail";
      baseRes.code = 501;
      res.send(baseRes);
    } else {
      baseRes.code = 200;
      baseRes.message = "success";
      res.send(baseRes);
    }
  });
});

app.get("/api/selectAll", (req, res) => {
  var sql = `select * from table1`;
  connection.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      baseRes.message = "Connection Fail";
      baseRes.code = 501;
      res.send(baseRes);
    } else {
      baseRes.code = 200;
      baseRes.message = "success";
      baseRes.datas = [];
      rows.forEach((element) => {
        baseRes.datas.push({
          name: element.name,
          age: element.age ? element.age : 0,
        });
      });

      res.send(baseRes);
    }
  });
});

app.get("/", (req, res) => {
  res.send("hello node!");
});

app.listen(port, () => console.log(`Listening on port : ${port}`));

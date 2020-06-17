const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

db.serialize(() => {
  //   db.run(`
  //     CREATE TABLE IF NOT EXISTS places(
  //       id INTEGER PRIMARY KEY AUTOINCREMENT,
  //       image TEXT,
  //       name TEXT,
  //       address TEXT,
  //       address2 TEXT,
  //       state TEXT,
  //       city TEXT,
  //       items TEXT
  //     );
  //   `);
  //   const query = `
  //     INSERT INTO places (
  //       image,
  //       name,
  //       address,
  //       address2,
  //       state,
  //       city,
  //       items
  //     ) values (?,?,?,?,?,?,?);`;
  //   const values = [
  //     "https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
  //     "Colectoria",
  //     "Eucaliptos",
  //     "3405",
  //     "PR",
  //     "Curitiba",
  //     "1,3,6",
  //   ];
  //   function afterInsertData(err) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log("Cadastrado com sucess");
  //     console.log(this);
  //   }
  // Inserir dados
  // db.run(query, values, afterInsertData);
  //Selecionar todos
  // db.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Registros:");
  //   console.log(rows);
  // });
  //Deletar todos
  // db.run(`DELETE FROM places`);
  // Deletar com condição
  // db.run(`DELETE FROM places WHERE id = ?`, [5], function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Registro deletado com sucessoS");
  // });
});

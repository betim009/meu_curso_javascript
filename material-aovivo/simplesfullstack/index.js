const mysql = require("mysql2/promise");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createPool({
  host: "localhost", // Seu host do MySQL
  user: "root", // Seu usuário do MySQL
  password: "12345678", // Sua senha do MySQL
  database: "coffe_shop", // nome do BD Sakila
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`A conexão está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute("SELECT 1");
  if (result) {
    console.log("Conexão ao BD feita com sucesso!");
  }
});

// ROTAS de padrao GET - RESGATAR
app.get("/users", async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM users");
  return res.json(result);
});

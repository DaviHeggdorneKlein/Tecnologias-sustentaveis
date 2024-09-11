require("dotenv").config();
const db = require("./db.js");
const port = process.env.PORT;
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/usuarios/:id", async (req, res) => {
  const usuario = await db.getUser(req.params.id);
  res.json(usuario);
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await db.getUsers();
  res.json(usuarios);
});

app.post("/usuarios", async (req, res) => {
  await db.addUser(req.body);
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`O servidor foi iniciado na porta: http://localhost:${port}`);
});

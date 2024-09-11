const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "db",
  database: "projetoDocker",
  password: "senha",
  port: 5432,
});

// Função para criar a tabela e inserir dados
async function setupDatabase() {
  try {
    await client.connect();

    await client.query(`
      -- Criação da tabela usuarios se não existir
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
      );

      -- Inserção de dados na tabela usuarios
      -- Usamos a cláusula ON CONFLICT para evitar erros ao tentar inserir registros duplicados
      INSERT INTO usuarios (nome, email)
      VALUES 
        ('João Silva', 'joao.silva@email.com'),
        ('Maria Souza', 'maria.souza@email.com'),
        ('Carlos Pereira', 'carlos.pereira@email.com')
      ON CONFLICT (email) DO NOTHING;
    `);

    console.log("Tabela criada e dados inseridos com sucesso!");
  } catch (err) {
    console.error("Erro ao executar o script:", err);
  } finally {
    await client.end();
  }
}

// Funções para manipular dados
async function getUsers() {
  const client = new Client({
    user: "postgres",
    host: "db",
    database: "projetoDocker",
    password: "senha",
    port: 5432,
  });

  try {
    await client.connect();
    const res = await client.query("SELECT * FROM usuarios");
    return res.rows;
  } catch (err) {
    console.error("Erro ao obter usuários:", err);
  } finally {
    await client.end();
  }
}

async function getUser(id) {
  const client = new Client({
    user: "postgres",
    host: "db",
    database: "projetoDocker",
    password: "senha",
    port: 5432,
  });

  try {
    await client.connect();
    const res = await client.query("SELECT * FROM usuarios WHERE id = $1", [
      id,
    ]);
    return res.rows;
  } catch (err) {
    console.error("Erro ao obter usuário:", err);
  } finally {
    await client.end();
  }
}

async function addUser(user) {
  const client = new Client({
    user: "postgres",
    host: "db",
    database: "projetoDocker",
    password: "senha",
    port: 5432,
  });

  try {
    await client.connect();
    await client.query("INSERT INTO usuarios (nome, email) VALUES ($1, $2)", [
      user.nome,
      user.email,
    ]);
  } catch (err) {
    console.error("Erro ao adicionar usuário:", err);
  } finally {
    await client.end();
  }
}

setupDatabase();

module.exports = {
  getUsers,
  getUser,
  addUser,
};

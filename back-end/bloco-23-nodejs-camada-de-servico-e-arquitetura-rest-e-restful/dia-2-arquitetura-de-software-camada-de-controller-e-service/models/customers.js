const connection = require('./connection');
const bcrypt = require('bcrypt');

async function getAll() {
  const [ customers ] = await connection.execute('SELECT id, name, cpf, email, created_at FROM customer');

  return customers;
}

async function getOne(id) {
  // PROIBIDO FAZER DESSA FORMA. SUJEITO A PAULADA.
  // const [ customer ] = await connection.execute(`SELECT * FROM customer WHERE id = ${id}`);
  const [ customer ] = await connection.execute(`SELECT id, name, cpf, email, created_at FROM customer WHERE id = ?`, [id]);

  return customer;
}

async function getByCpf(cpf) {
  const [ customer ] = 
  await connection.execute(`SELECT id, name, cpf, email, created_at FROM customer WHERE cpf = ?`,
  [cpf]);

  return customer;
}

async function getByEmail(email) {
  const [ customer ] = 
  await connection.execute(`SELECT id, name, cpf, email, created_at FROM customer WHERE email = ?`,
  [email]);

  return customer;
}

async function update(id, { name, cpf, email, password }) {
  await connection.execute(`
  UPDATE customer SET name = ?, email = ?, password = ?, cpf = ? WHERE id = ?`,
  [name, email, password, cpf, id]);
}

function deleteOne(id) {
  return connection.execute("DELETE FROM customer WHERE id = ?", [id]);
}

async function login({ email, password }) {
  // login usando email e senha com bcrypt e jwt
  const [ customer ] = await connection.execute(`SELECT id, name, cpf, email, created_at FROM customer WHERE email = ? AND password = ?`, [email, password]);

  return customer;

}
async function register({ name, cpf, email, password }) {
  // register com bcrypt e salt
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const [ insertId ] = await connection.execute(`
    INSERT INTO customer (name, cpf, email, password) VALUES (?, ?, ?, ?)`, [name, cpf, email, hash]);
      

  return { id: insertId, name, cpf, email, password };
}

module.exports = { getAll, update, deleteOne, getOne, getByCpf, getByEmail, login, register };
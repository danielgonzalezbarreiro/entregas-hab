// IMPORTO O QUE NECESITO PARA A CONEXION/API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//JSONWEBTOKEN DEPENDENCIAS
const jwt = require('jsonwebtoken')
const config = require('./config')

// DECLARO A "APP"
const app = express();

// APP USES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set('llave', config.llave)

// DATOS DE CONEXION
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysqlp4ssword!',
  database: 'hackamarket'
})

// CONEXION
connection.connect(error => {
  if (error) throw error
  console.log('DATABASE UP')
});

// PORTO DA API
const PORT = 3050

app.listen(PORT, () => console.log('API UP'))

// CHAMADA DE PROBA
app.get('/', (req, res) => {
  res.send('Hola')
})

// FUNCION PARA RECUPERAR OS CLIENTES DA BBDD
app.get('/clientes', (req, res) => {
  // QUERY SQL
  const sql = 'SELECT * FROM clientes'
  //CONEXION
  connection.query(sql, (error, results) => {
    if (error) throw error

    if (results.length > 0) {
      res.json(results)
    }
    else {
      res.send('No hay clientes')
    }
  })
})

// BORRAR CLIENTES
app.delete('/clientes/del/:id', (req, res) => {
  //QUERY SQL
  const id = req.params.id;
  const sql = `DELETE FROM clientes WHERE id=${id}`
  //CONEXION 
  connection.query(sql, error => {
    if (error) throw error
    res.send('Cliente borrado')
  })
})

// EDITAR CLIENTE
app.put('/clientes/edit/:id', (req, res) => {
  const { id, nombre, apellido, ciudad, empresa } = req.body;
  //QUERY SQL 
  const sql = `UPDATE clientes SET nombre='${nombre}', apellido='${apellido}', ciudad='${ciudad}', empresa='${empresa}' WHERE id=${id}`
  connection.query(sql, error => {
    if (error) throw error
    res.send('Cliente edit')
  })
})

// FUNCION PARA RECUPERAR OS PRODUCTOS DA BBDD
app.get('/productos', (req, res) => {
  // QUERY SQL
  const sql = 'SELECT * FROM productos'
  //CONEXION
  connection.query(sql, (error, results) => {
    if (error) throw error

    if (results.length > 0) {
      res.json(results)
    }
    else {
      res.send('No hay clientes')
    }
  })
})

// CREAR CLIENTES
app.post('/add-client', (req, res) => {
  // QUERY SQL
  const sql = 'INSERT INTO clientes SET ?'
  const newClient = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    ciudad: req.body.ciudad,
    empresa: req.body.empresa
  }
  //CONEXION
  connection.query(sql, newClient, error => {
    if (error) throw error
    res.send('Cliente creado')
  })
})

// LOGIN
app.post("/auth", (req, res) => {
  //DATOS QUE LLEGAN; USER Y PASS
  const email = req.body.email;
  const password = req.body.password;

  // EL valor de usuario deberia ser un emeail o un nickname, es decir algo único

  //SECUENCIA SQL
  const sql = `SELECT * FROM usuarios WHERE email="${email}" AND password="${password}"`;
  //CONEXION A LA BBDD
  connection.query(sql, (error, results) => {
    let admin = null;
    if (error) throw error;
    if (results.length > 0) {
      const payload = {
        check: true,
      };
      if (results[0].admin === 1) {
        admin = true;
      } else {
        admin = false;
      }
      const token = jwt.sign(payload, app.get("llave"), {
        expiresIn: "1 day",
      });
      res.json({
        mensaje: "Te has autenticado correctamente",
        token: token,
        isAdmin: admin,
      });
    } else {
      console.log("Datos incorrectos");
    }
  });
});

// CREAR USUARIOS
app.post('/register', (req, res) => {
  // QUERY SQL
  const sql = 'INSERT INTO usuarios SET ?'
  const newClient = {
    email: req.body.email,
    password: req.body.password
  }
  //CONEXION
  connection.query(sql, newClient, error => {
    if (error) throw error
    res.send('Cliente creado')
  })
})
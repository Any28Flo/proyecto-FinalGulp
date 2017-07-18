const express         = require('express'); //Framework Express
const bodyParser      = require('body-parser'); //Parsea el post para obtener objetos json en el request
const levelup         = require('levelup'); // Base de datos
const morgan          = require('morgan'); // Sistema de logging (muestra en la cosa los request)
const morganjson      = require('morgan-json');
const apiUsers        = require('./api/users'); //Endpoints relacionados al User model

const app = express();
const db  = levelup('./api/users', {valueEncoding: 'json'});

const format = morganjson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});


app.use("/static", express.static(__dirname + '/node_modules'));
app.use("/static", express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan(format));

let router = express.Router();
//Funciones get
router.get('/', (req, res) => {
  res.json({ name: 'yape-api',version: "0.0.1"});
});
//Funcion para levantar el servidor
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    console.log("Levantando el servidor")
})


app.use('/api',apiUsers(router,db));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});
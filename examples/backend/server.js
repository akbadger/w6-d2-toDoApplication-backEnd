// console.log(process.env.DATABASE_URL)

// Load in libraries
var express = require('express') 
var pg = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL,
})

var bodyParser = require('body-parser')

// Creates our webserver
var app = express()

// Adds public static file support
app.use(express.static('public'))
app.use(bodyParser.json())

// Routes
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/add', function (req, res) {
    var answer = Number(req.query.number1) + Number(req.query.number2)

    res.send('<h1>' + answer + '</h1>')
})

app.get('/users', function (req, res) {
    pg('users').select().then(function(data) {
        res.json(data)
    })
})

app.post('/users', function (req, res) {
    pg.insert(req.body).table('users').then(function(data) {
        res.json(data)
    })
})

app.get('/name/:username', function (req, res) {
  res.send('Hai ' + req.params.username)
})

// Listen for web traffic, start the web server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
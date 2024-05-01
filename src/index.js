const express = require('express')
const cors = require('cors')
const port = 3333
const app = express()
const allMovies = require('./dataMovies')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(allMovies)
})

app.listen(port, () => {
    console.log(`Servidor rodando`);
})
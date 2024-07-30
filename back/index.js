const express = require('express')

const routeMovies = require('./src/routes/routeMovies')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.listen(3000, () => {
    console.log('Esta esuchando')
})

app.use('/api',routeMovies)


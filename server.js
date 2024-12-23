import express from 'express'
import config from './src/config/default.js'

const app = express()
const port = config.port

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to CodeNest API ⚡')
})

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`)
})

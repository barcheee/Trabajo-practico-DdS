const express = require('express')
const app = express()
const port = 3000

// Middleware to parse JSON and URL-encoded data
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies

app.get('/', (req, res) => {
  res.send('holandas nuevo mundazo')
})

app.post('/ping', (req, res) => {
    res.json({ message: 'pong' })
})

// Example POST endpoint
app.post('/example', (req, res) => {
  const { data } = req.body
  res.json({ message: 'This is a POST request example', receivedData: data })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
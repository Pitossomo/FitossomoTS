import express from 'express'
import { handleGETRequest } from './bmi'
const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello Fullstack!')
})

app.get('/bmi', (req, res) => {
  const result = handleGETRequest(req.query)
  res.json(result)
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
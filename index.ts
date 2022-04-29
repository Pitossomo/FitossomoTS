import express from 'express'
import { handleGETRequest as handleBMIreq } from './bmi'
import { handlePOSTRequest as handleExercisesReq } from './exercises'
const app = express()

app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Fullstack!')
})

app.get('/bmi', (req, res) => {
  const result = handleBMIreq(req.query)
  res.json(result)
})

app.post('/exercises', (req, res) => {
  console.log(req.body)
  const result = handleExercisesReq(req.body)
  res.json(result)
})


const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
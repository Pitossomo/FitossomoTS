import express from 'express'
const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello Fullstack!')
})

app.get('/bmi', (req, res) => {
  const heightArg = req.query.height
  const widthArg = req.query.width

  
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
import express from 'express'
import axios from 'axios'
const app = express()

app.get('/', (req, res) => {
  console.log('this is the first test and it\'s working')
  res.send('ok')
})

app.listen(3100, () => {
  console.log('running in port 3100')
})

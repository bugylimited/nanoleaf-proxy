require('dotenv').config()

import express from 'express'
import { getState, setOn } from './nanoleafClient'

const app = express()
const PORT = process.env.PORT

app.get('/', async (req, res) => {
  const state = await getState()
  res.json(state)
})

app.get('/toggle', async (req, res) => {
  const state = await getState()
  if (typeof state?.on?.value === 'boolean') {
    await setOn(!state?.on?.value)
    res.send()
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`)
})

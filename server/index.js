import express from 'express'
import cors from 'cors'
import phorestRoutes from './routes/phorest.js'

const app  = express()
const PORT = process.env.PORT || 3001

const ALLOWED_ORIGINS = [
  'http://localhost:5173',   // Vite dev server
  'https://treasury.ca',     // production — update when live
]

app.use(cors({ origin: ALLOWED_ORIGINS, credentials: true }))
app.use(express.json())

app.use('/api/phorest', phorestRoutes)

app.get('/health', (_, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`Treasury API running on http://localhost:${PORT}`)
})

import express from 'express'
import cors from 'cors'
import phorestRoutes from './routes/phorest.js'

const app  = express()
const PORT = process.env.PORT || 3001

// FRONTEND_URL is set in Railway env vars once Vercel gives you a domain
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  process.env.FRONTEND_URL,
].filter(Boolean)

app.use(cors({ origin: ALLOWED_ORIGINS, credentials: true }))
app.use(express.json())

app.use('/api/phorest', phorestRoutes)

app.get('/health', (_, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`Treasury API running on http://localhost:${PORT}`)
})

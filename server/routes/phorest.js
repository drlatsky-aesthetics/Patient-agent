import { Router } from 'express'
import * as phorest from '../lib/phorestClient.js'

const router = Router()

function handle(fn) {
  return async (req, res) => {
    try {
      const data = await fn(req)
      res.json(data)
    } catch (err) {
      const status = err.status ?? 500
      res.status(status).json({ error: err.message })
    }
  }
}

// GET /api/phorest/branches
router.get('/branches', handle(() => phorest.getBranches()))

// GET /api/phorest/clients?page=0&size=20
router.get('/clients', handle((req) => {
  const { page = 0, size = 20 } = req.query
  return phorest.getClients({ page: Number(page), size: Number(size) })
}))

// GET /api/phorest/clients/:clientId
router.get('/clients/:clientId', handle((req) => phorest.getClient(req.params.clientId)))

// GET /api/phorest/clients/by-email/:email
router.get('/clients/by-email/:email', handle((req) => phorest.findClientByEmail(req.params.email)))

// GET /api/phorest/clients/:clientId/appointments?from=&to=
router.get('/clients/:clientId/appointments', handle((req) => {
  const { from, to } = req.query
  return phorest.getAppointments(req.params.clientId, { from, to })
}))

// GET /api/phorest/clients/:clientId/appointments/next
router.get('/clients/:clientId/appointments/next', handle((req) =>
  phorest.getNextAppointment(req.params.clientId)
))

// GET /api/phorest/clients/:clientId/purchases
router.get('/clients/:clientId/purchases', handle((req) =>
  phorest.getPurchases(req.params.clientId)
))

// GET /api/phorest/services
router.get('/services', handle(() => phorest.getServices()))

export default router

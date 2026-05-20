// Server-side Phorest API client — credentials never leave this file.
// Docs: https://platform.phorest.com/third-party-api-server/v3/api-docs

const BASE_URL  = process.env.PHOREST_BASE_URL || 'https://platform.phorest.com/third-party-api-server'
const BIZ_ID    = process.env.PHOREST_BUSINESS_ID
const AUTH_HDR  = `Basic ${Buffer.from(`${process.env.PHOREST_USERNAME}:${process.env.PHOREST_PASSWORD}`).toString('base64')}`

async function phorest(path, { method = 'GET', body } = {}) {
  const url = `${BASE_URL}/api/business/${BIZ_ID}${path}`
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: AUTH_HDR,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const text = await res.text()
    throw Object.assign(new Error(`Phorest ${res.status}: ${path}`), { status: res.status, body: text })
  }

  return res.json()
}

// ── Branch ────────────────────────────────────────────────────────────────────

export function getBranches() {
  return phorest('/branch')
}

// ── Clients ───────────────────────────────────────────────────────────────────

export function getClients({ page = 0, size = 20 } = {}) {
  return phorest(`/client?page=${page}&size=${size}`)
}

export function getClient(clientId) {
  return phorest(`/client/${clientId}`)
}

export function findClientByEmail(email) {
  return phorest(`/client?email=${encodeURIComponent(email)}&size=1`)
}

// ── Appointments ──────────────────────────────────────────────────────────────

export function getAppointments(clientId, { from, to } = {}) {
  const params = new URLSearchParams({ clientId })
  if (from) params.set('from', from)
  if (to)   params.set('to', to)
  return phorest(`/appointment?${params}`)
}

export function getNextAppointment(clientId) {
  const from = new Date().toISOString()
  return phorest(`/appointment?clientId=${clientId}&from=${from}&size=1&sort=startTime,asc`)
}

// ── Services / treatments ─────────────────────────────────────────────────────

export function getServices() {
  return phorest('/service')
}

export function getPurchases(clientId) {
  return phorest(`/client/${clientId}/purchase`)
}

// Phorest API client — all requests proxy through your backend.
// The backend holds PHOREST_CLIENT_ID + PHOREST_CLIENT_SECRET.
// The frontend only talks to VITE_API_BASE_URL/api/phorest/*.

const BASE = `${import.meta.env.VITE_API_BASE_URL ?? ''}/api/phorest`

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Phorest API error ${res.status}: ${path}`)
  return res.json()
}

// Returns the next upcoming appointment for a patient
export async function getNextAppointment(patientId) {
  return request(`/patients/${patientId}/appointments/next`)
}

// Returns full appointment list for a patient
export async function getAppointments(patientId, { from, to } = {}) {
  const params = new URLSearchParams()
  if (from) params.set('from', from)
  if (to)   params.set('to', to)
  return request(`/patients/${patientId}/appointments?${params}`)
}

// Returns treatment history for a patient
export async function getTreatmentHistory(patientId) {
  return request(`/patients/${patientId}/treatments`)
}

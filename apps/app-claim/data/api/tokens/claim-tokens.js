import fetch from '../fetch'
import { claimHost } from 'app.config.js'

export default ({ address, fingerprint }) => {
  // address, fingerprint
  const body = JSON.stringify({ address, fingerprint })
  return fetch(`${claimHost}/api/v1/claim-link`, { method: 'POST', body })
}

// POST
// Params
// address: receiver Ethereum address
// fingerprint: hash of device fingerprint

// Returns success
// 200 OK
// success: true
// txHash: hash of claim transaction
// message: null

// Returns error
// success: false
// txHash: null
// message: «All links have been claimed»

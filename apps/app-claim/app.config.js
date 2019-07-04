/* global CHAIN_ID, AMOUNT, SYMBOL, CLAIM_HOST, DECENTRALAND_URL */
const config = require('../../configs/claim.config.json')
const chainId = CHAIN_ID || config.defaultChainId
const defaultAmount = AMOUNT || config.defaultAmount
const defaultSymbol = SYMBOL || config.defaultSymbol
const claimHost = CLAIM_HOST || config.claimHost
const decentralandUrl = DECENTRALAND_URL || config.decentralandUrl

module.exports = {
  chainId,
  defaultAmount,
  defaultSymbol,
  claimHost,
  decentralandUrl
}

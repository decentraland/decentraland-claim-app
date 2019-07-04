class Tokens {
  constructor (actions) {
    this.actions = actions
  }

  claimTokensERC20 ({ address, fingerprint }) {
    this.actions.dispatch({ type: '*TOKENS.CLAIM_TOKENS_ERC20', payload: { address, fingerprint } })
  }

  checkTransactionStatus ({ transactionId, chainId }) {
    this.actions.dispatch({ type: '*TOKENS.CHECK_TRANSACTION_STATUS', payload: { transactionId, chainId } })
  }

  checkIfClaimed () {
    this.actions.dispatch({ type: '*TOKENS.CHECK_IF_CLAIMED' })
  }
}

export default Tokens

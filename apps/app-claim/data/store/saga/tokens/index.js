import { takeEvery } from 'redux-saga/effects'

import claimTokensERC20 from './every/claim-tokens-erc20'
import checkTransactionStatus from './every/check-transaction-status'
import checkIfClaimed from './every/check-if-claimed'

export default function * () {
  yield takeEvery('*TOKENS.CLAIM_TOKENS_ERC20', claimTokensERC20)
  yield takeEvery('*TOKENS.CHECK_TRANSACTION_STATUS', checkTransactionStatus)
  yield takeEvery('*TOKENS.CHECK_IF_CLAIMED', checkIfClaimed)
}

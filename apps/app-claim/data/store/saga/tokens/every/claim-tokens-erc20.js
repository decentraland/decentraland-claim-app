import { put, call } from 'redux-saga/effects'
import { claimTokens } from 'data/api/tokens'
const ls = window.localStorage

const generator = function * ({ payload }) {
  try {
    const { address, fingerprint } = payload
    yield put({ type: 'USER.SET_LOADING', payload: { loading: true } })
    const { success, txHash, message } = yield call(claimTokens, { address, fingerprint })

    if (success) {
      ls && ls.setItem('claimed', 'true')
      yield put({ type: 'TOKENS.SET_TRANSACTION_ID', payload: { transactionId: txHash } })
    } else {
      if (message && (message === 'All links have been claimed' || message === 'Campaign is over')) {
        yield put({ type: 'USER.SET_ERRORS', payload: { errors: ['ALL_LINKS_CLAIMED'] } })
      }
    }
    yield put({ type: 'USER.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
  }
}

export default generator

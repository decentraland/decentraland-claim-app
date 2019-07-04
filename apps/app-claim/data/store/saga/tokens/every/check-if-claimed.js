import { put } from 'redux-saga/effects'
const ls = window.localStorage

const generator = function * () {
  try {
    yield put({ type: 'USER.SET_LOADING', payload: { loading: true } })
    const claimed = ls && ls.getItem('claimed')
    if (claimed) {
      yield put({ type: 'USER.SET_ALREADY_CLAIMED', payload: { alreadyClaimed: claimed } })
      yield put({ type: 'USER.SET_STEP', payload: { step: 5 } })
    } else {
      yield put({ type: 'USER.SET_STEP', payload: { step: 1 } })
    }
    yield put({ type: 'USER.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
  }
}

export default generator

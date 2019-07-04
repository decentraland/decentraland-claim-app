import reducers from './reducers'
import { defaultAmount, defaultSymbol } from 'app.config.js'

const initialState = {
  loading: false,
  decimals: 1,
  amount: defaultAmount,
  icon: undefined,
  symbol: defaultSymbol
}

export default (state = initialState, action = {}) => {
  const newState = { ...state }
  const { type } = action
  const actionMethod = ACTIONS[type]
  if (!actionMethod) return newState

  return actionMethod(newState, action)
}

const ACTIONS = {
  'CONTRACT.SET_LOADING': reducers.setLoading,
  'CONTRACT.SET_DECIMALS': reducers.setDecimals,
  'CONTRACT.SET_AMOUNT': reducers.setAmount,
  'CONTRACT.SET_SYMBOL': reducers.setSymbol,
  'CONTRACT.SET_ICON': reducers.setIcon
}

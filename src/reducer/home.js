import * as actionType from '../action/index'

const initState = {
  reduce: 'this is a reduce',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
  case actionType.DATA:
    return { ...state, ...action }
  default:
    return state
  }
}

export default reducer
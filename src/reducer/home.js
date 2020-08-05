const initState = {
  reduce: 'this is a reduce',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
  case 'DATA':
    return { ...state }
  default:
    return state
  }
}

export default reducer
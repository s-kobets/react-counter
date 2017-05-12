const initialState = {
    adults: {
        value: 1,
        isMax: false,
        isMin: true,
    },
    childrens: {
        value: 0,
        isMax: false,
        isMin: true,
    },
    infants: {
        value: 0,
        isMax: false,
        isMin: true,
    },
    total: 0
}

export function reducerCounter(state=initialState, action) {
  let typeObj;
  const type = action.amount;
  if (type === 'adults') typeObj = state.adults;
  if (type === 'childrens') typeObj = state.childrens;
  if (type === 'infants') typeObj = state.infants;
  switch (action.type) {
    case 'Increment':
      state[type] = {...state[type], value: typeObj.value + 1, ...state }
      return {...state};
    case 'Decrement':
      state[type] = {...state[type], value: typeObj.value - 1, ...state }
      return {...state};
    case 'IsMax':
      return Object.assign({}, state, {counter: state.counter - action.amount});
    case 'IsMin':
      return Object.assign({}, state, {counter: state.counter - action.amount});
    default:
      return state;
  }
}

export function increment(type) {
    return {
        type: 'Increment',
        amount: type
    }
}

export function decrement(type) {
    return {
        type: 'Decrement',
        amount: type
    }
}

export const actions = {
    increment,
    decrement
}

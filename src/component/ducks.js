const initialState = {
  parent: 1,
  children: 0,
  total: 1,
}

export function reducerCounter(state=initialState, action) {
  let typeObj;
  const type = action.amount;
  if (type === 'parent') typeObj = state.parent;
  if (type === 'children') typeObj = state.children;
  switch (action.type) {
    case 'Increment':
      state[type] = typeObj + 1
      state.total += 1
      return {...state};
    case 'Decrement':
      state[type] = typeObj - 1
      state.total -= 1
      return {...state};
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

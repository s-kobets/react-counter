import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducerCounter } from './component/ducks'

function parent(state={}, action) {
    return state;
}

const rootReducer = combineReducers({
  form: formReducer.plugin({
    counters: (state, action) => {
      switch(action.type) {
        case '@@redux-form/CHANGE':
          const {parent, children, infant} = state.values
          let total = parent + children + infant

          if (parent < infant) {
            state.values.infant = parent
            total -= 1
          }
          state.values.total = total
        return { ...state}
        default:
          return state
      }
    }
  }),
  parent,
  reducerCounter,
});

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  store.getState();
});

export default store
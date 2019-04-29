const redux = require('redux')

const initialState = {
  counter: 100,
  cartCount: 0,
  isAuthenticated : false
}

// reducer
const rootReducer = (state = initialState,action) => {

  if(action.type == "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  return state
}

// creating a store
const store = redux.createStore(rootReducer)

// subscribe to the store
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'INC_COUNTER'
})

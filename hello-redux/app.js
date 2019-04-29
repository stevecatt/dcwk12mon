const redux = require('redux')

const initialState = {
  counter: 0,
  cartItems: [],
  isAuthenticated: false
}

// create a reducer
let rootReducer = (state = initialState,action) => {
  if(action.type == "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    }
  } else if(action.type == "IS_AUTH") {
    return {
      ...state,
      isAuthenticated: action.value
    }

  } else if(action.type == "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state
}

// create a store
const store = redux.createStore(rootReducer)

// create subscriptions
store.subscribe(() => {
  console.log("[Subscribed]",store.getState())
})


console.log(store.getState()) // get global state

console.log("Dispatching INC_COUNTER action")
// dispatching actions
store.dispatch({
  type: 'INC_COUNTER'
})

console.log("Global state after dispatch..")
console.log(store.getState())

console.log("updating isAuthenticated")
store.dispatch({
  type: 'IS_AUTH',value: true
})

store.dispatch({
  type: "ADD_COUNTER",
  value: 10
})

console.log(store.getState())

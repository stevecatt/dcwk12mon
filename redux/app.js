const redux =require('redux')

const initialState ={
    counter: 100,
    otherstuff:"yup its other stuff"
}

let rootReducer = (state = initialState, action)=> {
    if (action.type == 'INC_COUNTER'){
    return{
        ...state,
        counter: state.counter +1
    }

} else if (action.type == 'DEC_COUNTER'){
    return{
        ...state,
        counter: state.counter -1
    }
}
return state
}

const store = redux.createStore(rootReducer)

store.subscribe(() => {
    console.log("[Subscribed ]",store.getState())
  })

store.dispatch({
    type: 'INC_COUNTER'
})



console.log("increasing")
console.log(store.getState())

store.dispatch({
    type: 'DEC_COUNTER'
})


console.log("decreasing")
console.log(store.getState())



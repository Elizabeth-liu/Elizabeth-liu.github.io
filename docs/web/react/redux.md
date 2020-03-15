# redux

## 最小实现
```js
class Store {
    constructor(reducer, state = {}) {
        this.state = state
        this.listeners = []
        this.reducer = reducer
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action)
        this.listeners.forEach(listener => listener())
    }

    getState() {
        return this.state
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }
}
```

## 最小demo
```js
function reducer(state, action) {
   switch (action.type) {
       case 'addOne': {
           return {
               ...state,
               count: state.count + 1
           }
       }
       default: {
           return state
       }
   }
}

const store = new Store(reducer, {count: 0})

store.subscribe(() => {
    console.log('subscribe test:', store.getState())
})

store.dispatch({type: 'addOne'})
store.dispatch({type: 'addOne'})
```

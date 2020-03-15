# redux-thunk

## 源码
redux-thunk先检查action是否是函数，如果是函数就应该是由thunk处理。如果不是，传递给下一个中间件。
```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

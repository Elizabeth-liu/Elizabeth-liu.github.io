# dva

dva想提供一个基于业界react&redux最佳实践的业务框架，以解决用裸redux全家桶作为前端数据层带来的种种问题

编辑成本高，需要在reducer, saga, action之间来回切换

不便于组织业务模型（或者叫domain model）。比如我们写了一个userlist之后，要写一个productlist，需要复制很多文件。

saga书写太复杂，每监听一个action都需要走fork -> watcher -> worker的流程

redux entry书写麻烦，要完成store创建，中间件配置，路由初始化，Provider的store的绑定，saga的初始化

## 依赖关系

```js
dva
  react
  react-dom
  dva-core
    redux
    redux-saga
  history
  react-redux
  react-router-redux
  ```

## 实现思路

他最核心的是提供了app.model方法，用于把reducer, initialState, action, saga封装到一起

```js
const model = {
    // 用作顶层state key，以及action前缀
    namespace
    // module级初始state
    state
    // 订阅其它数据源，如router change，window resize, key down/up...
    subscriptions
    // redux-saga里的sagas
    effects
    // redux里的reducer
    reducers
};
```

dva-core实际所作的主要工作是从model配置得到reducers，worker sagas, states后，屏蔽接下来的一系列繁琐工作：

+ 接redux（组合state，组合reducer）

+ 接redux-saga（完成redux-saga的fork -> watcher -> worker，并做好错误捕获）

除了core里最重要的两部分外，dva还做了一些事情：

+ 内置react-router-redux, history负责路由管理

+ 粘上react-redux的connect，isomorphic-fetch等常用的东西

+ subscriptions锦上添花，给监听场外因素的代码提供一个容身之处

+ 和react连接起来（用store连接react和redux，靠redux中间件机制把redux-saga拉进来一起玩）

到这里差不多封装好了，那么，下面开一些口子增加一点灵活性：

+ 递出一堆钩子（effect/reducer/action/state级hook），让内部状态可读

+ 提供全局错误处理方式，解决异步错误不可控的痛点

+ 增强model管理（允许动态增删model）

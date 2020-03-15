
# 路由

```js
// 使用history实现，可能有兼容性问题
class Routers {
  constructor() {
    this.routes = {};
    // 在初始化时监听popstate事件
    this._bindPopState();
  }
  // 初始化路由
  init(path) {
    history.replaceState({path: path}, null, path);
    this.routes[path] && this.routes[path]();
  }
  // 将路径和对应回调函数加入hashMap储存
  route(path, callback) {
    this.routes[path] = callback || function() {};
  }

  // 触发路由对应回调
  go(path) {
    history.pushState({path: path}, null, path);
    this.routes[path] && this.routes[path]();
  }
  // 监听popstate事件
  _bindPopState() {
    window.addEventListener('popstate', e => {
      const path = e.state && e.state.path;
      this.routes[path] && this.routes[path]();
    });
  }
}
```

网页不刷新url更新原理：

众所周知，Ajax可以实现页面的无刷新操作——优点；但是，也会造成另外的问题，无法前进与后退！曾几何时，Gmail似乎借助iframe搞定，如今，HTML5让事情变得如同过家家般简单。

当执行Ajax操作的时候，往浏览器history中塞入一个地址（使用pushState）（这是无刷新的）；于是，返回的时候，通过URL或其他传参，我们就可以还原到Ajax之前的模样。


<!-- https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/

http://louiszhai.github.io/2017/04/07/http-cache/


http://louiszhai.github.io/2016/11/02/ajax/

http://louiszhai.github.io/2016/01/11/cross-domain/

https://segmentfault.com/l/1500000015237807

https://juejin.im/post/5bc293cf6fb9a05ce95c8468 -->

# vue
https://github.com/ustbhuangyi/vue-analysis

<!-- ## Vue三要素

响应式: 例如如何监听数据变化,其中的实现方法就是我们提到的双向绑定
模板引擎: 如何解析模板
渲染: Vue如何将监听到的数据变化和解析后的HTML进行渲染

https://juejin.im/post/5ab07a63f265da2389258b12#comment

https://juejin.im/post/5b98c4da6fb9a05d353c5fd7 -->

## 双向绑定

vue3.0改为proxy，可以代理数组

```html
<html>
<body>
<main>
  <p>请输入:</p>
  <input type="text" id="input">
  <p id="p"></p>
</main>
</body>
<script src="index.js"></script>
</html>
```

```js
// proxy实现
const input = document.getElementById('input');
const p = document.getElementById('p');
const obj = {};

const newObj = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function(target, key, value, receiver) {
    console.log(target, key, value, receiver);
    if (key === 'text') {
      // input.value = value;
      p.innerHTML = value;
    }
    return Reflect.set(target, key, value, receiver);
  },
});

input.addEventListener('keyup', function(e) {
  newObj.text = e.target.value;
});
```

```js
// defineproperty版本
// watcher: 谁变了以后干什么
// dep: {target: 某个watcher；subs: }
// observer: 观察属性变化

const Vue = (function() {
  // debugger
  let uid = 0;
  // 用于储存订阅者并发布消息
  class Dep {
    constructor() {
      // 设置id,用于区分新Watcher和只改变属性值后新产生的Watcher
      this.id = uid++;
      // 储存订阅者的数组
      this.subs = [];
    }
    // 触发target上的Watcher中的addDep方法,参数为dep的实例本身
    depend() {
      Dep.target.addDep(this);
    }
    // 添加订阅者
    addSub(sub) {
      this.subs.push(sub);
      console.log(sub)
    }
    notify() {
      // 通知所有的订阅者(Watcher)，触发订阅者的相应逻辑处理
      this.subs.forEach(sub => sub.update());
    }
  }
  // 为Dep类设置一个静态属性,默认为null,工作时指向当前的Watcher
  Dep.target = null;
  // 监听者,监听对象属性值的变化
  class Observer {
    constructor(value) {
      this.value = value;
      this.walk(value);
    }
    // 遍历属性值并监听
    walk(value) {
      Object.keys(value).forEach(key => this.convert(key, value[key]));
    }
    // 执行监听的具体方法
    convert(key, val) {
      defineReactive(this.value, key, val);
    }
  }

  function defineReactive(obj, key, val) {
    const dep = new Dep();
    // 给当前属性的值添加监听
    let chlidOb = observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        // 如果Dep类存在target属性，将其添加到dep实例的subs数组中
        // target指向一个Watcher实例，每个Watcher都是一个订阅者
        // Watcher实例在实例化过程中，会读取data中的某个属性，从而触发当前get方法
        if (Dep.target) {
         debugger
          dep.depend();
        }
        return val;
      },
      set: newVal => {
        if (val === newVal) return;
        val = newVal;
        // 对新值进行监听
        chlidOb = observe(newVal);
        // 通知所有订阅者，数值被改变了
        dep.notify();
      },
    });
  }

  function observe(value) {
    // 当值不存在，或者不是复杂数据类型时，不再需要继续深入监听
    if (!value || typeof value !== 'object') {
      return;
    }
    return new Observer(value);
  }

  class Watcher {
    constructor(vm, expOrFn, cb) {
      this.depIds = {}; // hash储存订阅者的id,避免重复的订阅者
      this.vm = vm; // 被订阅的数据一定来自于当前Vue实例
      this.cb = cb; // 当数据更新时想要做的事情
      this.expOrFn = expOrFn; // 被订阅的数据
      this.val = this.get(); // 维护更新之前的数据
    }
    // 对外暴露的接口，用于在订阅的数据被更新时，由订阅者管理员(Dep)调用
    update() {
      this.run();
    }
    addDep(dep) {
      // 如果在depIds的hash中没有当前的id,可以判断是新Watcher,因此可以添加到dep的数组中储存
      // 此判断是避免同id的Watcher被多次储存
      if (!this.depIds.hasOwnProperty(dep.id)) {
        dep.addSub(this);
        this.depIds[dep.id] = dep;
      }
    }
    run() {
      const val = this.get();
      // console.log(val);
      if (val !== this.val) {
        this.val = val;
        this.cb.call(this.vm, val);
      }
    }
    get() {
      // 当前订阅者(Watcher)读取被订阅数据的最新更新后的值时，通知订阅者管理员收集当前订阅者
      Dep.target = this;
      const val = this.vm._data[this.expOrFn];
      // 置空，用于下一个Watcher使用
      Dep.target = null;
      // console.log(Dep.target, 2);
      return val;
    }
  }

  class Vue {
    constructor(options = {}) {
      // 简化了$options的处理
      this.$options = options;
      // 简化了对data的处理
      let data = (this._data = this.$options.data);
      // 将所有data最外层属性代理到Vue实例上
      Object.keys(data).forEach(key => this._proxy(key));
      // 监听数据
      observe(data);
    }
    // 对外暴露调用订阅者的接口，内部主要在指令中使用订阅者
    $watch(expOrFn, cb) {
      new Watcher(this, expOrFn, cb);
    }
    _proxy(key) {
      Object.defineProperty(this, key, {
        configurable: true,
        enumerable: true,
        get: () => this._data[key],
        set: val => {
          this._data[key] = val;
        },
      });
    }
  }

  return Vue;
})();

let demo = new Vue({
  data: {
    text: '',
  },
});

const p = document.getElementById('p');
const input = document.getElementById('input');
// console.log(input)
input.addEventListener('keyup', function(e) {
  // debugger
  demo.text = e.target.value;
});
// debugger
demo.$watch('text', str => p.innerHTML = str);
```

之所以 Vue3.0 要使用 Proxy 替换原本的 API 原因在于 Proxy 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 Proxy 可以完美监听到任何方式的数据改变，唯一缺陷可能就是浏览器的兼容性不好了。

<!-- 来源：https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf

其他：https://juejin.im/post/5825874ad203090055311b30 -->


## keep-alive

介绍
keep-alive是Vue.js的一个内置组件。它能够不活动的组件实例保存在内存中，而不是直接将其销毁，它是一个抽象组件，不会被渲染到真实DOM中，也不会出现在父组件链中。它提供了include与exclude两个属性，允许组件有条件地进行缓存。

原理
其实就是在created时将需要缓存的VNode节点保存在this.cache中／在render时,如果VNode的name符合在缓存条件（可以用include以及exclude控制），则会从this.cache中取出之前缓存的VNode实例进行渲染。

https://segmentfault.com/a/1190000011978825

```js
<keep-alive include="a">
 <component>
  <!-- name 为 a 的组件将被缓存！ -->
 </component>
</keep-alive>可以保留它的状态或避免重新渲染
<keep-alive exclude="a">
 <component>
  <!-- 除了 name 为 a 的组件都将被缓存！ -->
 </component>
</keep-alive>可以保留它的状态或避免重新渲染
```
```js
<keep-alive>
  <router-view v-if="$route.meta.keepAlive">
    <!-- 这里是会被缓存的视图组件，比如 Home！ -->
  </router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive">
  <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
</router-view>
```
<!-- https://www.jb51.net/article/122570.htm -->

<!-- ## computed实现 -->

## vue的diff算法

在采取diff算法比较新旧节点的时候，比较只会在同层级进行, 不会跨层级比较。

当数据发生改变时，set方法会让调用Dep.notify通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图。

![avatar](https://user-gold-cdn.xitu.io/2018/5/19/163777930be304eb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

key: 方便定位与重用

<!-- https://juejin.im/post/5affd01551882542c83301da#heading-3

## router

https://juejin.im/post/58c8d226ac502e00587f60cd
https://juejin.im/post/58cfca3661ff4b006ca18383

## ssr
https://www.aliyun.com/jiaocheng/988353.html
https://zhuanlan.zhihu.com/p/41427873
https://pan.baidu.com/s/1O6jHvr-5by-HallWsTygrw  fat9 -->

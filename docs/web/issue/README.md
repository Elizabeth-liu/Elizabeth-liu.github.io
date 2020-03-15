# 天坑

## html

## css
### span宽度
span作为行内元素不能设置宽度，但是使用display：block又会占据一行，跟div就一样了；此时应设置为display: inline-block，另注意兼容性。


## js

## react
### React中状态保存
https://www.cnblogs.com/rynxiao/p/8305017.html

## vue
Vue-router:
最外层需要/，子路由不要

一些预处理程序，例如sass不能解析>>>属性，这种情况下可以用deep，它是>>>的别名，工作原理相同。
```js
<style lang="css" scoped>
  .gHeader /deep/ .name{ //第一种写法
    color:red;
  }
  .gHeader >>> .name{   //二种写法
    color:red;
  }
</style>
```

css modules添加的data-v只是为了区分局部样式，跟是否能被穿透没关系

vue的props也可以设置初始值

vue中的方法名称不能跟请求方法相同，如get,delete等

## babel
ie各版本下报找不到promise
https://www.cnblogs.com/wonyun/p/8076453.html


## webpack
roadhog迁移到webpack

babel6和babel7不能共存

React is not defined :  react 16 要单独引入react和{component}，报错带上了vendors.dll相关，一直以为是dll配置有问题。。。哭。。。

@babel/plugin-proposal-class-properties：class的属性功能

@babel/plugin-syntax-dynamic-import: 动态import

Css-loader?modules才能开启css modules功能，才能在js中import css

babel-plugin-import: antd按需加载, 没有的话报错“Unexpected character '@'”

html-webpack-plugin需要html或ejs等格式的template，否则提示hash history needs a DOM。。以为是路由挂载问题。。。其实可以在index.js打印window，即可发现是因为没有window，所以触发了router 里非浏览器（生产）环境的报错

Index.html中会自动注入vendor, css, js

mini-css-extract-plugin: 开始报“this[module_type] is not defined”，然而html-webpack-plugin配好后就好了。。。

项目代码用mini-css-extract-plugin和css loader; node module用style loader和css loader

path.resolve(__dirname, "src", "index.js”）：scr后面会自动加上/

经验。。。：局部调不好先屏蔽。。。

### 模块化

把一切东西都塞到 default 里面是一个错误的选择，会让 tree-shaking 无效。从语意上来说，default export 用来说明这个模块是什么，named export 用来说明这个模块有什么。

https://zhuanlan.zhihu.com/p/43844419

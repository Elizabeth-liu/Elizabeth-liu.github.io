# react

## 核心api

mixin功能相加
key与virtual dom
error bundary即报错时页面不崩，局部组件显示错误信息
fragments传数组
context还需要分别包装provider和consumer，最方便也要用hoc包一层

高阶组件：多个不同组件有相同功能，形式类似于容器组件，把其他组件当作子组件一样进行包裹。
公共组件：多个表功能大部分相同，抽成公共组件。
容器组件：父组件，子组件通常是没有逻辑的展示型组件。

与三方库协同：暴露dom给其他库操作。

HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.

jsx 语法解析
this.state=仅在construtor可用
多个setstate合并处理
受控与非受控
time slicing, suspense, async
虚拟dom

虚拟dom：
https://jdc.jd.com/archives/212685

## Fiber架构

核心是把原本1000ms的任务分100段执行缩短到34ms?

https://juejin.im/entry/5b0245486fb9a07ac23b08ab

## 组件的实现与挂载

我们的组件声明基于React和Component，所以首先我们打开React.js,可以看到如下代码:

![avatar](https://user-gold-cdn.xitu.io/2018/2/28/161da240027189e1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

我们在import React from 'react'时，引入的就是源码中提供的React对象。在extends Component时，继承了Component类。

沿着ReactComponent的线索，我们打开node_modules/react/lib/ReactComponent.js:

![avatar](https://user-gold-cdn.xitu.io/2018/2/28/161da2b29457fb9a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

将最初的示例代码放入babel中:
![avatar](https://user-gold-cdn.xitu.io/2018/2/28/161da3eb56e05b59?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

其中_Component是对象ReactComponent，_inherit方法是extends关键字的函数实现，这些都是ES6相关内容，我们暂时不管。关键在于我们发现render方法实际上是调用了React.createElement方法(实际是ReactElement方法)。然后我们打开ReactElement.js:

![avatar](https://user-gold-cdn.xitu.io/2018/2/28/161da40a23987c0f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

看到这里我们发现，其实每一个组件对象都是通过React.createElement方法创建出来的ReactElement类型的对象。换句话说，ReactElment是一种内部记录组件特征并告诉React你想在屏幕上看到什么的对象。
在ReactElement中:

| 参数 | 功能 |
| - | :-: | -: |
| $$typeof | 组件的标识信息 |
| key | DOM结构标识，提升update性能 |
| props | 子结构相关信息(有则增加children字段/没有为空)和组件属性(如style)
| ref | 真实DOM的引用 |
| _owner | _owner === ReactCurrentOwner.current(ReactCurrentOwner.js),值为创建当前组件的对象，默认值为null。 |

通过执行React.createElement创建出的ReactElement类型的js对象，就是"React组件"，这与控制台打印出的结果完全对应。总结来说，如果我们通过class关键字声明React组件,那么他们在解析成真实DOM之前一直是ReactElement类型的js对象。

我们知道可以通过ReactDOM.render(component,mountNode)的形式对自定义组件/原生DOM/字符串进行挂载，
那么挂载的过程又是如何实现的呢？
ReactDOM.render实际调用了内部的ReactMount.render，进而执行ReactMount._renderSubtreeIntoContainer。从字面意思上就可以看出是将"子DOM"插入容器的逻辑

![avatar](https://user-gold-cdn.xitu.io/2018/2/28/161db4dcee7ff574?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 组件类型

四大组件类型的总结表格：

| nextElement | 实际参数 | 结果 |
| - | :-: | -: |
| null/false | 空 | 创建ReactDOMEmptyComponent组件 |
| object && type === string | 虚拟DOM | 创建ReactDOMComponent组件 |
| object && type !== string | React组件 | 创建ReactCompositeComponent组件 |
| string | 字符串 | 创建ReactDOMTextComponent组件 |
| number | 数字 | 创建ReactDOMTextComponent组件 |

## 详解事务与更新队列

https://juejin.im/post/59cc4c4bf265da0648446ce0

## 事件系统

https://juejin.im/post/5a0cf54ff265da43333df2c4


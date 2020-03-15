(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{208:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("npx\nhttp://www.ruanyifeng.com/blog/2019/02/npx.html")]),t._v(" "),n("p",[t._v("jwt")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("https://jkchao.github.io/typescript-book-chinese/error/common.html#%E6%8D%95%E8%8E%B7%E4%B8%8D%E8%83%BD%E6%9C%89%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3%E7%9A%84%E7%AE%80%E7%9F%AD%E5%8F%98%E9%87%8F")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("一、我们要实现一个完整的双向绑定需要以下几个要点。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("二、Object.defineProperty的缺陷")]),t._v(" "),n("p",[n("code",[t._v("Object.defineProperty")]),t._v("的第一个缺陷,无法监听数组变化。 然而"),n("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Flist.html%23%25E6%2595%25B0%25E7%25BB%2584%25E6%259B%25B4%25E6%2596%25B0%25E6%25A3%2580%25E6%25B5%258B",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue的文档"),n("OutboundLink")],1),t._v("提到了Vue是可以检测到数组变化的，但是只有以下八种方法,"),n("code",[t._v("vm.items[indexOfItem] = newValue")]),t._v("这种是无法检测的。")]),t._v(" "),t._m(6),n("p",[t._v("我们应该注意到在上文中的实现里,我们多次用遍历方法遍历对象的属性，这就引出了Object.defineProperty的第二个缺陷,只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历，如果属性值也是对象那么需要深度遍历,显然能劫持一个完整的对象是更好的选择。")]),t._v(" "),n("p",[t._v("三、Proxy实现的双向绑定的特点\nProxy直接可以劫持整个对象,并返回一个新对象,不管是操作便利程度还是底层功能上都远强于Object.defineProperty。\n当我们对数组进行操作(push、shift、splice等)时，会触发对应的方法名称和length的变化，我们可以借此进行操作,以上文中Object.defineProperty无法生效的列表渲染为例。\nProxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的。\nProxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改。\nProxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利。\n当然,Proxy的劣势就是兼容性问题,而且无法用polyfill磨平,因此Vue的作者才声明需要等到下个大版本(3.0)才能用Proxy重写。")]),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("浅拷贝可通过object.assign，展开运算符 ...来实现。\n深拷贝可通过JSON.parse(JSON.stringify(object))来实现，但该方法有局限性：\n会忽略 undefined\n会忽略 symbol\n不能序列化函数\n不能解决循环引用的对象")]),t._v(" "),t._m(8),n("p",[t._v("实现一个深拷贝有些麻烦，因为要考虑好多种边界情况，比如原型链如何处理、DOM 如何处理等等。项目中一般直接使用lodash的deepclone。那就实现个简易版吧。")]),t._v(" "),t._m(9),n("p",[t._v("immutable, purecomponent")]),t._v(" "),n("p",[t._v("http://blog.csdn.net/waiterwaiter/article/details/50267787")]),t._v(" "),n("p",[t._v("https://www.zhihu.com/question/23031215")]),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("假设var arr = ['aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'bbb', 'bbb', 'bbb', 'ccc', 'ccc']\nvar length = arr.length\nvar positions = []\nvar getIndex = (n) => {\nif (n > length-1) {   // 超出列表长度，无须继续\nreturn\n} else if (n === length-1) {  // 等于列表长度，即最后一项\npositions.push(length-1)\n} else {  // 递归求取m+1到最后一位中，lastIndex的位置\nvar m = arr.lastIndexOf(arr[n])\npositions.push(m)\ngetIndex(m+1)\n}\n}\ngetIndex(0)\nconsole.log(positions)     //  [4, 7, 9]")]),t._v(" "),n("p",[t._v("var itemTimes = {}\nif (positions.length === 1) {  // 只有一项\nitemTimes = {arr[0]: 1}\n} else {\nfor (i=positions.length-1; i>0; i--) {  // 第二到最后一项\nitemTimes = {...itemTimes, arr[positions[i]]: positions[i]-positions[i-1]}\n}\nitemTimes = {...itemTimes, arr[0]: positions[0]+1}  // 第一项")]),t._v(" "),n("p",[t._v("其他方法有：正则等")]),t._v(" "),n("p",[t._v("参考资料：\nhttp://www.jb51.net/article/86017.htm")]),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("https://juejin.im/post/5b9e8e396fb9a05d09654387")]),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("https://juejin.im/post/5ba34e54e51d450e5162789b")]),t._v(" "),n("p",[t._v("前端常用插件、工具类库汇总\nhttps://juejin.im/post/5ba7d5dd5188255c6140cc9d")]),t._v(" "),n("p",[t._v("jenkins\nhttps://juejin.im/post/5bc000826fb9a05d330adf9d")]),t._v(" "),n("p",[t._v("腾讯omijs\nhttps://juejin.im/post/5bc823d46fb9a05d1d2e3fc9")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript","aria-hidden":"true"}},[this._v("#")]),this._v(" typescript")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"双向绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定","aria-hidden":"true"}},[this._v("#")]),this._v(" 双向绑定")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4266102-0562075ab3a271df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("利用"),n("code",[t._v("Proxy")]),t._v("或"),n("code",[t._v("Object.defineProperty")]),t._v('生成的Observer针对对象/对象的属性进行"劫持",在属性发生变化后通知订阅者')]),t._v(" "),n("li",[t._v("解析器Compile解析模板中的"),n("code",[t._v("Directive")]),t._v("(指令)，收集指令所依赖的方法和数据,等待数据变化然后进行渲染")]),t._v(" "),n("li",[t._v("Watcher属于Observer和Compile桥梁,它将接收到的Observer产生的数据变化,并根据Compile提供的指令进行视图渲染,使得数据变化促使视图变化")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4266102-2885cd020da0b7df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("push()\npop()\nshift()\nunshift()\nsplice()\nsort()\nreverse()\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"深浅拷贝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深浅拷贝","aria-hidden":"true"}},[this._v("#")]),this._v(" 深浅拷贝")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  age"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" undefined"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sex"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Symbol")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'male'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  jobs"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'you'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("parse")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("stringify")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v('// {name: "you"}')]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("deepClone")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isObject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" o "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" o "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'function'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" o "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token function"}},[t._v("isObject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'非对象'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isArray "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isArray")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newObj "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" isArray "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("obj "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  Reflect"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ownKeys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newObj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    newObj"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isObject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("deepClone")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" obj"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newObj\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  b"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    c"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    d"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newObj "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("deepClone")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnewObj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"找出数组重复项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找出数组重复项","aria-hidden":"true"}},[this._v("#")]),this._v(" 找出数组重复项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"elementui的构建流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elementui的构建流程","aria-hidden":"true"}},[this._v("#")]),this._v(" ElementUI的构建流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"interview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interview","aria-hidden":"true"}},[this._v("#")]),this._v(" interview")])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);
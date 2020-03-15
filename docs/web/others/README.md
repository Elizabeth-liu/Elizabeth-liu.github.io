# 其他

npx
http://www.ruanyifeng.com/blog/2019/02/npx.html

jwt

## typescript
https://jkchao.github.io/typescript-book-chinese/error/common.html#%E6%8D%95%E8%8E%B7%E4%B8%8D%E8%83%BD%E6%9C%89%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3%E7%9A%84%E7%AE%80%E7%9F%AD%E5%8F%98%E9%87%8F

## 双向绑定
![image.png](https://upload-images.jianshu.io/upload_images/4266102-0562075ab3a271df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

一、我们要实现一个完整的双向绑定需要以下几个要点。

1.  利用`Proxy`或`Object.defineProperty`生成的Observer针对对象/对象的属性进行"劫持",在属性发生变化后通知订阅者
2.  解析器Compile解析模板中的`Directive`(指令)，收集指令所依赖的方法和数据,等待数据变化然后进行渲染
3.  Watcher属于Observer和Compile桥梁,它将接收到的Observer产生的数据变化,并根据Compile提供的指令进行视图渲染,使得数据变化促使视图变化

![image.png](https://upload-images.jianshu.io/upload_images/4266102-2885cd020da0b7df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


二、Object.defineProperty的缺陷

`Object.defineProperty`的第一个缺陷,无法监听数组变化。 然而[Vue的文档](https://link.juejin.im?target=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Flist.html%23%25E6%2595%25B0%25E7%25BB%2584%25E6%259B%25B4%25E6%2596%25B0%25E6%25A3%2580%25E6%25B5%258B)提到了Vue是可以检测到数组变化的，但是只有以下八种方法,`vm.items[indexOfItem] = newValue`这种是无法检测的。

```
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```
我们应该注意到在上文中的实现里,我们多次用遍历方法遍历对象的属性，这就引出了Object.defineProperty的第二个缺陷,只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历，如果属性值也是对象那么需要深度遍历,显然能劫持一个完整的对象是更好的选择。

三、Proxy实现的双向绑定的特点
Proxy直接可以劫持整个对象,并返回一个新对象,不管是操作便利程度还是底层功能上都远强于Object.defineProperty。
当我们对数组进行操作(push、shift、splice等)时，会触发对应的方法名称和length的变化，我们可以借此进行操作,以上文中Object.defineProperty无法生效的列表渲染为例。
Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的。
Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改。
Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利。
当然,Proxy的劣势就是兼容性问题,而且无法用polyfill磨平,因此Vue的作者才声明需要等到下个大版本(3.0)才能用Proxy重写。

## 深浅拷贝
浅拷贝可通过object.assign，展开运算符 ...来实现。
深拷贝可通过JSON.parse(JSON.stringify(object))来实现，但该方法有局限性：
会忽略 undefined
会忽略 symbol
不能序列化函数
不能解决循环引用的对象
```js
let a = {
  age: undefined,
  sex: Symbol('male'),
  jobs: function() {},
  name: 'you'
}
let b = JSON.parse(JSON.stringify(a))
console.log(b) // {name: "you"}
```
实现一个深拷贝有些麻烦，因为要考虑好多种边界情况，比如原型链如何处理、DOM 如何处理等等。项目中一般直接使用lodash的deepclone。那就实现个简易版吧。
```js
function deepClone(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }

  if (!isObject(obj)) {
    throw new Error('非对象')
  }

  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })

  return newObj
}

let obj = {
  a: [1, 2, 3],
  b: {
    c: 2,
    d: 3
  }
}
let newObj = deepClone(obj)
newObj.b.c = 1
console.log(obj.b.c) // 2
```

immutable, purecomponent

http://blog.csdn.net/waiterwaiter/article/details/50267787

https://www.zhihu.com/question/23031215

## 找出数组重复项
   假设var arr = ['aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'bbb', 'bbb', 'bbb', 'ccc', 'ccc']
       var length = arr.length
       var positions = []
       var getIndex = (n) => {
          if (n > length-1) {   // 超出列表长度，无须继续
            return
          } else if (n === length-1) {  // 等于列表长度，即最后一项
            positions.push(length-1)
          } else {  // 递归求取m+1到最后一位中，lastIndex的位置
            var m = arr.lastIndexOf(arr[n])
            positions.push(m)
            getIndex(m+1)
          }
        }
        getIndex(0)
        console.log(positions)     //  [4, 7, 9]

var itemTimes = {}
if (positions.length === 1) {  // 只有一项
   itemTimes = {arr[0]: 1}
} else {
for (i=positions.length-1; i>0; i--) {  // 第二到最后一项
itemTimes = {...itemTimes, arr[positions[i]]: positions[i]-positions[i-1]}
}
itemTimes = {...itemTimes, arr[0]: positions[0]+1}  // 第一项

其他方法有：正则等

参考资料：
http://www.jb51.net/article/86017.htm





## ElementUI的构建流程
https://juejin.im/post/5b9e8e396fb9a05d09654387

## interview
https://juejin.im/post/5ba34e54e51d450e5162789b


前端常用插件、工具类库汇总
https://juejin.im/post/5ba7d5dd5188255c6140cc9d

jenkins
https://juejin.im/post/5bc000826fb9a05d330adf9d

腾讯omijs
https://juejin.im/post/5bc823d46fb9a05d1d2e3fc9

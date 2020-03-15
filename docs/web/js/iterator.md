# iterator

## 定义

ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。

for var value of obj，value是类数组对象的每个值。

## 与generator
yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。

```js
let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
```
## 最简实现

Symbol.iterator方法的最简单实现，还是使用 Generator 函数。

```js
let obj = {
  * [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
};

for (let x of obj) {
  console.log(x);
}
// "hello"
// "world"
```
## for in
for...in循环读取键名，for...of循环读取键值。如果要通过for...of循环，获取数组的索引，可以借助数组实例的entries方法和keys方法（参见《数组的扩展》一章）。

for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟for...in循环也不一样。

```js
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); //  "3", "5", "7"
}
```

## 类数组iterator
并不是所有类似数组的对象都具有 Iterator 接口，一个简便的解决方法，就是使用Array.from方法将其转为数组。

```js
let arrayLike = { length: 2, 0: 'a', 1: 'b' };

// 报错
for (let x of arrayLike) {
  console.log(x);
}

// 正确
for (let x of Array.from(arrayLike)) {
  console.log(x);
}
```

## for in 与 for of对比
for...in循环有几个缺点。数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。某些情况下，for...in循环会以任意顺序遍历键名。

for...of有着同for...in一样的简洁语法，但是没有for...in那些缺点。不同于forEach方法，它可以与break、continue和return配合使用。它提供了遍历所有数据结构的统一操作接口。

```js
for (let value of myArray) {
  console.log(value);
}
```



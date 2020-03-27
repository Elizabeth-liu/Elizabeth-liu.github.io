# 算法

## 栈
```js
class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    this.stack.pop()
  }
  peek() {
    return this.stack[this.getCount() - 1]
  }
  getCount() {
    return this.stack.length
  }
  isEmpty() {
    return this.getCount() === 0
  }
}
```

### 用两个栈实现一个队列
队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
```js
var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    const { inStack, outStack } = this;
    if (outStack.length) {
        return outStack.pop();
    } else {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
        return outStack.pop() || -1;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```
### 队列
单链队列
```js
class Queue {
  constructor() {
    this.queue = []
  }
  enQueue(item) {
    this.queue.push(item)
  }
  deQueue() {
    return this.queue.shift()
  }
  getHeader() {
    return this.queue[0]
  }
  getLength() {
    return this.queue.length
  }
  isEmpty() {
    return this.getLength() === 0
  }
}
```


## 找出数组中重复的数字

思路：

不需要额外的数组或者hash table来保存，题目里写了数组里数字的范围保证在0 ~ n-1 之间，所以可以利用现有数组设置标志，当一个数字被访问过后，可以设置对应位上的数 + n，之后再遇到相同的数时，会发现对应位上的数已经大于等于n了，那么直接返回这个数即可。

https://www.nowcoder.com/questionTerminal/623a5ac0ea5b4e5f95552655361ae0a8

```js
function findDuplicateNumber(array) {
  const length = array.length
  for (i=0; i<length; i++) {
    const index = array[i];
    if (index >= length) {
      index -= length;
    }
    if (array[index] >= length) {
      return index;
    }
    array[index] = array[index] + length;
  }
  return -1;
}
```

<!-- http://louiszhai.github.io/2016/12/23/sort/ -->

<!--
## 深拷贝

https://juejin.im/post/5bc1ae9be51d450e8b140b0c -->


## 题目：leedcode 209

给定一个整形数组和一个数字s,找到数组中最短的一个连续子数组，使得连续子数组的数组和sum >= s,返回这个最短的连续子数组的长度值。

即：

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
分析：这里依旧可以采取暴力解法，找出所有的子数组，再分别相加求解。但是这里介绍更好的解法。

这里可以看到由于需要找连续的子数组，所以依旧可以设置两个指针，往同一方向移动。

如果两个指针中间的值加起来>sum的时候，记录此时数组的长度，接着左指针移动，减小sum的值 ；

如果< sum的话，右指针移动扩大范围。

最后返回最短的长度值。

代码实现：

```js
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var left = 0;
  var right = -1; // right 的起始位置很重要，这里选择-1 [left, right]这个区间刚开始是没有值的
  var tmpSum = 0;
  var minLength;

  // 循环停止的条件是左指针小于长度
  while (left < nums.length - 1) {
    if(tmpSum < s) {
      // 这里要注意边界的处理，当右指针移动到最后一个元素的时候结束
      if(right >= nums.length -1) {
        return minLength || 0;
      }
      right ++;
      // 这里tmpSum的计算也很巧妙，直接用累加的方式，节省计算量
      tmpSum = tmpSum + nums[right]
    } else {
      var tmp = right - left + 1;
      if(minLength) {
        if(tmp < minLength) {
          minLength = tmp;
        }
      } else {
        minLength = tmp;
      }
      // 左边指针移动减少sum的值
      tmpSum = tmpSum - nums[left];
      left ++;
    }
  }
  if(!minLength) {
    return 0;
  }
  return minLength;
};
```

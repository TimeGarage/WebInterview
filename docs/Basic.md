# 基础

## JS基础

### 数据类型

#### 存储形式

> 问：JavaScript有哪些数据类型？它们是如何存储在内存中的？

JavaScript的基本数据类型有原始类型和引用类型两类。

- 原始类型有6个 => 存放在栈中
  - String
  - Number
  - Boolean
  - null
  - undefined
  - Symbol （ES6引入，表示独一无二的值）
- 引用类型 有5个 => 存放在堆中
  - Object
  - Array
  - Date
  - RegExp
  - Function

栈（Stack）和堆（Heap），是两种基本的数据结构。Stack 在内存中自动分配内存空间的；Heap 在内存中是动态分配内存空间的，不一定会自动释放。一般我们在项目中将对象类型手动置为 null 原因，减少无用内存消耗。

#### null类型

> 问：为什么typeof null == 'object'

不同的对象在底层原理的存储是用二进制表示的，在 javaScript中，如果二进制的前三位都为 0 的话，系统会判定为是 Object类型。null的存储二进制是 000，也是前三位，所以系统判定 null为 Object类型。

扩展：

这个 bug 个第一版的 javaScript留下来的。俺也进行扩展一下其他的几个类型标志位：

- 000：对象类型。
- 1：整型，数据是31位带符号整数。
- 010：双精度类型，数据是双精度数字。
- 100：字符串，数据是字符串。
- 110：布尔类型，数据是布尔值。

#### 判断数据类型的方法

> 问：判断数据类型有哪些方法？typeof 和instanceof 有什么区别？

##### typeof

typeof的缺陷：null的历史遗留问题和无法判断除function以外的引用类型的具体数据类型。

##### instanceof

instanceof的原理：instanceof  运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype属性。

instanceof的缺陷：原型链中的prototype 随时可以被改动的，改变后的值可能不存在于 object的原型链上，instanceof返回的值可能就返回 false。另外，instanceof无法判断原始类型。

instanceof的优势：可以判断自定义类型

##### constructor

constructor：根据对象的构造函数来判断，缺点是很容易被伪造。

##### toString()

如果不需要判断自定义类型，那么最推荐使用Object.prototype.toString.call(obj)来判断。

#### 类型转换

##### 显式类型转换

###### 转换为字符串类型

| 数据类型  | String类型               |
| :-------- | :----------------------- |
| 数字      | 转化为数字对应的字符串   |
| true      | 转化为字符串 "true"      |
| null      | 转化为字符串 "null"      |
| undefined | 转化为字符串 “undefined” |
| Object    | 转化为 "[object Object]" |

###### 转换为布尔型

除了特殊的几个值 空字符串、 undefined、 NAN、 null、 false、 0  转化为 Boolean 为 false 之外，其他类型值都转化为 true。

```javascript
Boolean('')         // false
Boolean(undefined)  // false
Boolean(null)       // false
Boolean(NaN)        // false
Boolean(false)      // false
Boolean(0)          // false
Boolean({})		    // true
Boolean([])		    // true
```

###### 转换为数字型

| 数据类型  | 数字类型                                                     |
| :-------- | :----------------------------------------------------------- |
| 字符串    | 1) 数字转化为对应的数字<br />2) 其他转化为 NaN               |
| 布尔类型  | 1) true 转化为 1<br />2) false 转化为 0                      |
| null      | 0                                                            |
| undefined | NaN                                                          |
| 数组      | 1) 数组为空转化为 0；<br />2) 数组只有一个元素转化为对应元素；<br />3) 其他转化为NaN |
| 空字符串  | 0                                                            |

对象类型转换为原始类型

- 转换为字符串类型： toString()
- 转换为其它基本类型：valueOf()

##### 隐式类型转换

JavaScript会在以下情况下自动完成类型转换：

- 四则运算

  "+"  : 

  - 如果双方都不是字符串，则将转化为**数字**或**字符串**。
    - Boolean + Boolean 会转化为数字相加。
    - Boolean + Number 布尔类型转化为数字相加。
    - Object + Number 对象类型调用 valueOf，如果不是 String、Boolean 或者 Number 类型，则继续调用 toString() 转化为字符串。
  - 字符串和字符串以及字符串和非字符串相加都会进行**连接**。

  其它运算符 ：**不会发生运算符重载**，会统一将表达式的值转换为Number类型。

  ```JavaScrpt
  console.log(true + true) => 2
  console.log(1 + true) => 2
  console.log(1 + '1') => '11'
  console.log([1] + 3) => '13'
  console.log(1 - '1') => 0
  console.log(1 * '2') => 2
  console.log(1 * []) => 0
  ```

- 点运算符 .

  隐式转换为对象

- if语句

  判断的条件表达式会被隐式转换为Boolean类型

- == （非严格匹配）

#### 逻辑运算符

逻辑运算符有 &&（且） 和 ||（或）两种

##### 条件判断

当逻辑运算符两侧均为Boolean类型时会进行条件判断

##### 赋值操作

- A && B => 检测A是否为假，是则返回A，否则返回B。

- A || B => 检测A是否为真，是则返回A，否则返回B。

#### 比较运算符

A === B 严格匹配

- 如果A和B的类型不同，则返回false。

- 如果A和B的类型相同，则按照下方表格进一步判断。

  | 条件                                                         | 例子                                                      | 返回值                               |
  | ------------------------------------------------------------ | --------------------------------------------------------- | ------------------------------------ |
  | undefined === undefined                                      | undefined === undefined                                   | true                                 |
  | null === null                                                | null === null                                             | true                                 |
  | String === String<br />(当字符串顺序和字符完全相等的时候返回 true，否则返回 false) | ‘a’ === 'a'<br />'a' === 'aa'                             | true<br />false                      |
  | Boolean  === Boolean                                         | true === true<br />true === false                         | true<br />false                      |
  | Symbol === Symbol                                            | 相同的 Symbol 返回 true，<br />不相同的 Symbol 返回 false |                                      |
  | Number  === Number<br />① 其中一个为 NaN，返回 false<br />② X 和 Y 值相等，返回 true<br />③ 0 和 -0，返回 true<br />④ 其他返回 false | NaN == NaN<br />NaN = 1<br />3 = 3<br />+0 = -0<br />     | false<br />false<br />true<br />true |

A == B 非严格匹配

- 如果A和B的类型相同，返回A===B的比较结果。

- 如果A和B的类型不同，根据下方表格进一步判断。

  | 条件                                                         | 例子                     | 返回值         |
  | ------------------------------------------------------------ | ------------------------ | -------------- |
  | null == undefined                                            | null == undefined        | true           |
  | String == Number，String  转 Number                          | '2' == 2                 | true           |
  | Boolean == Number，Boolean 转 Number                         | true == 1                | true           |
  | Object == String,Number,Symbol，将 Object 转化为原始类型再比较值大小 | [1] == 1<br />[1] == '1' | true<br />true |
  | 其他返回 false                                               |                          | false          |

### this

#### this的指向

this是一个对象，在不同情况下this会有不同的指向。

- 对象调用，this指向该对象。

  ```JavaScrpt
  var obj = {
      name:'小鹿',
      age: '21',
      print: function(){
          console.log(this)
          console.log(this.name + ':' + this.age)
      }
  }
  
  // 通过对象的方式调用函数
  obj.print();        // this 指向 obj
  ```

- 直接调用，this指向全局window对象。

  ```JavaScript
  function print(){
  	console.log(this);
  }
  
  // 全局调用函数
  print();   // this 指向 window
  ```

- 通过new方式实例化，this指向新创建的对象。
- 剪头函数中的this与声明所在的上下文相同。

#### 改变this指向

- apply、call、 bind 三者都是用来<u>改变函数的this对象的指向的</u>；

- apply、call、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；

- apply、call、bind 三者都可以利用后续参数传参。apply和bind接收参数的方式是一致的，需要把参数按顺序传递过去。而call则是需要把参数放在数组里传递。

  ```JavaScript
  func.call(this, arg1, arg2)
  func.bind(this, arg1, arg2)
  func.apply(this, [arg1, arg2])
  ```

- bind 是<u>返回对应函数</u>，便于稍后调用；apply 、call 则是立即调用 。

由于箭头函数没有自己的 this 指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定  this），他们的第一个参数会被忽略。

### new

#### new的过程

参考文章：[MDN文档-new关键字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

> 问：new的过程发生了什么？能否手写一个new操作符？

new的过程包括以下四个阶段：

- 创建一个新对象
- 将新对象的`__proto__`属性指向原函数的prototype
- 将新对象绑定到原函数的this上
- 如果函数没有返回其他对象则返回新对象。

```JavaScript
// 手写new操作符
function create(fn, ...args){
  let obj = {}
  Object.setPrototypeOf(obj, fn.prototype)
  let res = fn.apply(obj, args)
  return res instanceof Object ? res : obj
}

function Student(name, age) {
  this.name = name
  this.age = age
}

let stu = create(Student, 'Dustin', 23)
console.log(stu) // Student { name: 'Dustin', age: 23 }
```

在MDN文档中，推荐使用Object.setPrototypeOf()方法修改对象原型，兼容性更好。

#### 创建对象的方式

- new 构造函数
- 字面量
- Object.create()

Object.create()可用于实现继承，ES6中的extends关键字实际上就是Object.create()的语法糖。

> 问：new/字面量 与 Object.create(null)创建对象的区别？

- new 和 字面量创建的对象的原型指向 Object.prototype，会继承 Object 的属性和方法。
- 而通过 Object.create(null) 创建的对象，其原型指向 null，null 作为原型链的顶端，没有也不会继承任何属性和方法。

### 闭包

> 问：什么是作用域？什么是作用域链？

变量和函数的可使用范围叫做作用域。

每个函数都会有一个作用域，查找变量或函数时，由局部作用域到全局作用域依次查找，<u>这些作用域的集合就称为作用域链。</u>

> 问：什么是闭包？闭包有什么用？

参考：[MDN-闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

闭包 = 函数 + 外部作用域变量

闭包的应用：

- 保护代码
- 保存变量

### 原型

参考：[MDN-对象原型](https://developer.mozilla.org/zh-cn/docs/learn/javascript/objects/object_prototypes)

在JavaScript中，函数可以有属性。 每个函数都有一个特殊的属性叫作原型（prototype）。而每一个对象都有__proto__属性指向其构造函数的原型。原型的存在使得对象能从其他对象中继承方法与属性。

### 继承

> 问：JavaScript中的继承方式都有哪些？谈谈各个继承方式的优缺点。

#### 原型继承

思路：让新实例的原型等于父类的实例

缺点：

- 新实例无法向父类构造函数传参
- 继承单一 => 只能等于一个父类的实例
- 所有新实例都会共享父类实例的属性。

#### 借助构造函数

思路：在子类的构造函数中调用父类的构造函数

工具：call、apply函数

缺点：

- 只能继承父类构造函数的属性，没有继承父类原型。

- 无法实现构造函数的复用。（每次创建实例都要重新call、apply）
- 每个新实例都有父类构造函数的副本

#### 组合继承

### 垃圾回收机制

> 问：什么是内存泄漏？为什么会发生内存泄漏？

不再使用的内存，没有及时释放，就叫做内存泄漏。

垃圾回收是一个术语，在 计算机编程中用于描述查找和删除那些不再被其他对象引用的对象处理过程。换句话说，垃圾回收是删除任何其他对象未使用的对象的过程。 垃圾收集通常缩写为 "GC"， 是JavaScript中使用的内存管理系统的基本组成部分。

> 问：怎么解决内存泄漏？谈谈JS垃圾回收机制和运行原理？

JavaScript的垃圾回收机制旨在解决内存泄漏的问题，其基本原理是找出那些不再继续使用的变量，然后释放其占用的内存，垃圾收集器会按照固定的时间间隔周期性地执行这一操作。

#### 标记清除法

从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。

原理：判断变量是否在执行环境中被引用

垃圾回收器在运行时，会为存储在内存中的变量加上标记，之后会去掉环境中的环境中变量以及被环境中变量引用的变量的标记。剩下的变量就视为即将要删除的变量，原因是在环境中无法访问到这些变量了。最后，垃圾回收器会自动完成内存清除操作。

#### 引用计数法

引用计数的垃圾收集策略不常用，引用计数的最基本含义就是跟踪记录每个值被引用的次数。

当声明变量并将一个引用类型的值赋值给该变量时，则这个值的引用次数加 1，同一值被赋予另一个变量，该值的引用计数加 1 。当引用该值的变量被另一个值所取代，则引用计数减 1，当计数为 0 的时候，说明无法在访问这个值了，所有系统将会收回该值所占用的内存空间。

缺陷：当两个对象相互引用时，在函数执行完成后两个对象的引用计数不会归0，而是依然占据内存，无法回收。

#### 手动释放内存

> 为了能够让页面获得最好的性能，必须确保 js 变量占用最少的内存，最好的方式就是将不用的变量引用释放掉，也叫做**解除引用**。

- 对于局部变量，函数执行完成离开环境变量，变量将自动解除引用。
- 对于全局变量，需要我们手动解除引用。(注意：解除引用并不意味被收回，而是将变量真正的脱离执行环境，下一次垃圾回收将其收回)。方法是将变量置为null。

### 浅拷贝与深拷贝

> 问：什么是浅拷贝？什么是深拷贝？为什么要使用它们？

- 浅拷贝：只进行一层关系的拷贝。

```JavaScript
//手写实现浅拷贝
function shallowCopy(obj) {
  const target = {}
  for(let key in obj) {
    target[key] = obj[key]
  }
  return target
}

//展开运算符
let a = {c: 1}
let b = {...a}
a.c = 2
console.log(b.c) // 1

//Object.assign()
let a = {c: 1}
let b = Object.assign({}, a)
a.c = 2
console.log(b.c) // 1
```

- 深拷贝：进行无限层次的拷贝。

```JavaScript
//手写实现简单深拷贝
function deepCopy(obj) {
    let target = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                target[key] = deepCopy(obj[key])
            }
            else {
                target[key] = obj[key]
            }
        }
    }
    return target
}

//JSON解析实现深拷贝
function jsonCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
```

存在的问题：

- 参数没有做校验
- 判断对象不够严谨
- 没有考虑到数组以及ES6的set，map，weakset和weakmap的兼容性
- 最严重的问题是递归容易爆栈
- 循环引用问题

解决循环引用问题的方法：

- 暴力破解
- 循环检测

### 异步编程

> 问：JavaScript为什么是单线程？带来了哪些问题？

简单来说，用途决定设计，JavaScript在浏览器上主要还是一门处理交互和操作DOM的语言，多线程会提升程序设计的复杂性。例如，多个线程同时操作一个DOM，执行顺序如何保证？

由于JavaScript是单线程的，下一个任务只有等上一个任务执行完成才能开始执行，因此容易出现阻塞问题。

HTML5使用Web Worker实现了真正意义上的多线程，但其仍然无法操作DOM。

#### 实现异步编程的方法

> 问：JS是如何实现异步编程的？

最早的解决方案：回调函数

缺陷：如果请求存在依赖性，则会形成不断的循环嵌套，即回调地狱。

回调地狱带来的问题：

- 嵌套函数存在耦合性，一旦某个函数自身有所改动或函数执行顺序有改动，会导致整个回调函数需要被重写。
- 嵌套函数一多，就很难处理错误。
- 回调函数不能使用try catch捕获异常。因为当异步任务执行完成后，捕获异常的函数已经在执行栈内退出了，所以异常无法被捕获。
- 回调函数不能直接return。return只能终止回调的函数的执行，而不能终止外部代码的执行。

> 问：如何解决回调地狱的问题？

- Generator (ES6)
- Promise (ES6)
- async/await (ES7)

> 问：异步代码的执行顺序是如何确定的？Event Loop运行机制是什么？

#### 事件循环

异步代码执行顺序实际上和事件循环机制有关。

##### 宏任务

- script标签内的代码
- setTimeout
- setInterval
- setImmediate
- I/O

##### 微任务

- Promise.then()
- process.nextTick()
- MutationObserver

一次循环会先执行宏任务，然后执行微任务。如果在宏任务中触发了新的宏任务，会在下一次循环中执行。而如果是微任务触发了新的微任务，则会在本轮循环中立即执行。在一次循环结束之后，浏览器会完成页面渲染的工作，此后重复以上循环。

## ES6

### 变量提升

### Promise

## 设计模式

### 工厂模式

### 发布订阅模式

## OOP

### 面向对象的特点

### 多态

### 继承

### 多重继承

## 浏览器

### 宏任务/微任务

### 重绘渲染

### 性能优化

#### 大图片加载

- 图片从模糊到清晰

- 分段加载

## CSS

### 布局

#### 传统盒模型

##### Position

##### Display

#### 弹性盒模型

### 响应式

#### viewport



### 动画
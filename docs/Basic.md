# 基础

## ES5

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

参考文章：[MDN文档-new关键字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

> 问：new的过程发生了什么？能否手写一个new操作符？

new的过程包括以下四个阶段：

- 创建一个新对象
- 将新对象的`__proto__`属性指向原函数的prototype
- 绑定 this
- 返回新对象

```JavaScript
// 手写new操作符


```



### 事件冒泡

### 函数柯里化

## ES6

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

### 事件循环

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
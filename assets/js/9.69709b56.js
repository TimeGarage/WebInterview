(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{363:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("h2",{attrs:{id:"es5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es5"}},[t._v("#")]),t._v(" ES5")]),t._v(" "),s("h3",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("h4",{attrs:{id:"存储形式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储形式"}},[t._v("#")]),t._v(" 存储形式")]),t._v(" "),s("blockquote",[s("p",[t._v("问：JavaScript有哪些数据类型？它们是如何存储在内存中的？")])]),t._v(" "),s("p",[t._v("JavaScript的基本数据类型有原始类型和引用类型两类。")]),t._v(" "),s("ul",[s("li",[t._v("原始类型有6个 => 存放在栈中\n"),s("ul",[s("li",[t._v("String")]),t._v(" "),s("li",[t._v("Number")]),t._v(" "),s("li",[t._v("Boolean")]),t._v(" "),s("li",[t._v("null")]),t._v(" "),s("li",[t._v("undefined")]),t._v(" "),s("li",[t._v("Symbol （ES6引入，表示独一无二的值）")])])]),t._v(" "),s("li",[t._v("引用类型 有5个 => 存放在堆中\n"),s("ul",[s("li",[t._v("Object")]),t._v(" "),s("li",[t._v("Array")]),t._v(" "),s("li",[t._v("Date")]),t._v(" "),s("li",[t._v("RegExp")]),t._v(" "),s("li",[t._v("Function")])])])]),t._v(" "),s("p",[t._v("栈（Stack）和堆（Heap），是两种基本的数据结构。Stack 在内存中自动分配内存空间的；Heap 在内存中是动态分配内存空间的，不一定会自动释放。一般我们在项目中将对象类型手动置为 null 原因，减少无用内存消耗。")]),t._v(" "),s("h4",{attrs:{id:"null类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null类型"}},[t._v("#")]),t._v(" null类型")]),t._v(" "),s("blockquote",[s("p",[t._v("问：为什么typeof null == 'object'")])]),t._v(" "),s("p",[t._v("不同的对象在底层原理的存储是用二进制表示的，在 javaScript中，如果二进制的前三位都为 0 的话，系统会判定为是 Object类型。null的存储二进制是 000，也是前三位，所以系统判定 null为 Object类型。")]),t._v(" "),s("p",[t._v("扩展：")]),t._v(" "),s("p",[t._v("这个 bug 个第一版的 javaScript留下来的。俺也进行扩展一下其他的几个类型标志位：")]),t._v(" "),s("ul",[s("li",[t._v("000：对象类型。")]),t._v(" "),s("li",[t._v("1：整型，数据是31位带符号整数。")]),t._v(" "),s("li",[t._v("010：双精度类型，数据是双精度数字。")]),t._v(" "),s("li",[t._v("100：字符串，数据是字符串。")]),t._v(" "),s("li",[t._v("110：布尔类型，数据是布尔值。")])]),t._v(" "),s("h4",{attrs:{id:"判断数据类型的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断数据类型的方法"}},[t._v("#")]),t._v(" 判断数据类型的方法")]),t._v(" "),s("blockquote",[s("p",[t._v("问：判断数据类型有哪些方法？typeof 和instanceof 有什么区别？")])]),t._v(" "),s("h5",{attrs:{id:"typeof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[t._v("#")]),t._v(" typeof")]),t._v(" "),s("p",[t._v("typeof的缺陷：null的历史遗留问题和无法判断除function以外的引用类型的具体数据类型。")]),t._v(" "),s("h5",{attrs:{id:"instanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[t._v("#")]),t._v(" instanceof")]),t._v(" "),s("p",[t._v("instanceof的原理：instanceof  运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype属性。")]),t._v(" "),s("p",[t._v("instanceof的缺陷：原型链中的prototype 随时可以被改动的，改变后的值可能不存在于 object的原型链上，instanceof返回的值可能就返回 false。另外，instanceof无法判断原始类型。")]),t._v(" "),s("p",[t._v("instanceof的优势：可以判断自定义类型")]),t._v(" "),s("h5",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),s("p",[t._v("constructor：根据对象的构造函数来判断，缺点是很容易被伪造。")]),t._v(" "),s("h5",{attrs:{id:"tostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tostring"}},[t._v("#")]),t._v(" toString()")]),t._v(" "),s("p",[t._v("如果不需要判断自定义类型，那么最推荐使用Object.prototype.toString.call(obj)来判断。")]),t._v(" "),s("h4",{attrs:{id:"类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),s("h5",{attrs:{id:"显式类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显式类型转换"}},[t._v("#")]),t._v(" 显式类型转换")]),t._v(" "),s("h6",{attrs:{id:"转换为字符串类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换为字符串类型"}},[t._v("#")]),t._v(" 转换为字符串类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("数据类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("String类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("数字")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("转化为数字对应的字符串")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('转化为字符串 "true"')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("null")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('转化为字符串 "null"')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("undefined")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("转化为字符串 “undefined”")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('转化为 "[object Object]"')])])])]),t._v(" "),s("h6",{attrs:{id:"转换为布尔型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换为布尔型"}},[t._v("#")]),t._v(" 转换为布尔型")]),t._v(" "),s("p",[t._v("除了特殊的几个值 空字符串、 undefined、 NAN、 null、 false、 0  转化为 Boolean 为 false 之外，其他类型值都转化为 true。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("h6",{attrs:{id:"转换为数字型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换为数字型"}},[t._v("#")]),t._v(" 转换为数字型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("数据类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("数字类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("字符串")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1) 数字转化为对应的数字"),s("br"),t._v("2) 其他转化为 NaN")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("布尔类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1) true 转化为 1"),s("br"),t._v("2) false 转化为 0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("null")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("undefined")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("NaN")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("数组")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1) 数组为空转化为 0；"),s("br"),t._v("2) 数组只有一个元素转化为对应元素；"),s("br"),t._v("3) 其他转化为NaN")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("空字符串")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])]),t._v(" "),s("p",[t._v("对象类型转换为原始类型")]),t._v(" "),s("ul",[s("li",[t._v("转换为字符串类型： toString()")]),t._v(" "),s("li",[t._v("转换为其它基本类型：valueOf()")])]),t._v(" "),s("h5",{attrs:{id:"隐式类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐式类型转换"}},[t._v("#")]),t._v(" 隐式类型转换")]),t._v(" "),s("p",[t._v("JavaScript会在以下情况下自动完成类型转换：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("四则运算")]),t._v(" "),s("p",[t._v('"+"  :')]),t._v(" "),s("ul",[s("li",[t._v("如果双方都不是字符串，则将转化为"),s("strong",[t._v("数字")]),t._v("或"),s("strong",[t._v("字符串")]),t._v("。\n"),s("ul",[s("li",[t._v("Boolean + Boolean 会转化为数字相加。")]),t._v(" "),s("li",[t._v("Boolean + Number 布尔类型转化为数字相加。")]),t._v(" "),s("li",[t._v("Object + Number 对象类型调用 valueOf，如果不是 String、Boolean 或者 Number 类型，则继续调用 toString() 转化为字符串。")])])]),t._v(" "),s("li",[t._v("字符串和字符串以及字符串和非字符串相加都会进行"),s("strong",[t._v("连接")]),t._v("。")])]),t._v(" "),s("p",[t._v("其它运算符 ："),s("strong",[t._v("不会发生运算符重载")]),t._v("，会统一将表达式的值转换为Number类型。")]),t._v(" "),s("div",{staticClass:"language-JavaScrpt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("console.log(true + true) => 2\nconsole.log(1 + true) => 2\nconsole.log(1 + '1') => '11'\nconsole.log([1] + 3) => '13'\nconsole.log(1 - '1') => 0\nconsole.log(1 * '2') => 2\nconsole.log(1 * []) => 0\n")])])])]),t._v(" "),s("li",[s("p",[t._v("点运算符 .")]),t._v(" "),s("p",[t._v("隐式转换为对象")])]),t._v(" "),s("li",[s("p",[t._v("if语句")]),t._v(" "),s("p",[t._v("判断的条件表达式会被隐式转换为Boolean类型")])]),t._v(" "),s("li",[s("p",[t._v("== （非严格匹配）")])])]),t._v(" "),s("h4",{attrs:{id:"逻辑运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[t._v("#")]),t._v(" 逻辑运算符")]),t._v(" "),s("p",[t._v("逻辑运算符有 &&（且） 和 ||（或）两种")]),t._v(" "),s("h5",{attrs:{id:"条件判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件判断"}},[t._v("#")]),t._v(" 条件判断")]),t._v(" "),s("p",[t._v("当逻辑运算符两侧均为Boolean类型时会进行条件判断")]),t._v(" "),s("h5",{attrs:{id:"赋值操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#赋值操作"}},[t._v("#")]),t._v(" 赋值操作")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("A && B => 检测A是否为假，是则返回A，否则返回B。")])]),t._v(" "),s("li",[s("p",[t._v("A || B => 检测A是否为真，是则返回A，否则返回B。")])])]),t._v(" "),s("h4",{attrs:{id:"比较运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[t._v("#")]),t._v(" 比较运算符")]),t._v(" "),s("p",[t._v("A === B 严格匹配")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果A和B的类型不同，则返回false。")])]),t._v(" "),s("li",[s("p",[t._v("如果A和B的类型相同，则按照下方表格进一步判断。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("条件")]),t._v(" "),s("th",[t._v("例子")]),t._v(" "),s("th",[t._v("返回值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("undefined === undefined")]),t._v(" "),s("td",[t._v("undefined === undefined")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("null === null")]),t._v(" "),s("td",[t._v("null === null")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("String === String"),s("br"),t._v("(当字符串顺序和字符完全相等的时候返回 true，否则返回 false)")]),t._v(" "),s("td",[t._v("‘a’ === 'a'"),s("br"),t._v("'a' === 'aa'")]),t._v(" "),s("td",[t._v("true"),s("br"),t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("Boolean  === Boolean")]),t._v(" "),s("td",[t._v("true === true"),s("br"),t._v("true === false")]),t._v(" "),s("td",[t._v("true"),s("br"),t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("Symbol === Symbol")]),t._v(" "),s("td",[t._v("相同的 Symbol 返回 true，"),s("br"),t._v("不相同的 Symbol 返回 false")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Number  === Number"),s("br"),t._v("① 其中一个为 NaN，返回 false"),s("br"),t._v("② X 和 Y 值相等，返回 true"),s("br"),t._v("③ 0 和 -0，返回 true"),s("br"),t._v("④ 其他返回 false")]),t._v(" "),s("td",[t._v("NaN == NaN"),s("br"),t._v("NaN = 1"),s("br"),t._v("3 = 3"),s("br"),t._v("+0 = -0"),s("br")]),t._v(" "),s("td",[t._v("false"),s("br"),t._v("false"),s("br"),t._v("true"),s("br"),t._v("true")])])])])])]),t._v(" "),s("p",[t._v("A == B 非严格匹配")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果A和B的类型相同，返回A===B的比较结果。")])]),t._v(" "),s("li",[s("p",[t._v("如果A和B的类型不同，根据下方表格进一步判断。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("条件")]),t._v(" "),s("th",[t._v("例子")]),t._v(" "),s("th",[t._v("返回值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("null == undefined")]),t._v(" "),s("td",[t._v("null == undefined")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("String == Number，String  转 Number")]),t._v(" "),s("td",[t._v("'2' == 2")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("Boolean == Number，Boolean 转 Number")]),t._v(" "),s("td",[t._v("true == 1")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("Object == String,Number,Symbol，将 Object 转化为原始类型再比较值大小")]),t._v(" "),s("td",[t._v("[1] == 1"),s("br"),t._v("[1] == '1'")]),t._v(" "),s("td",[t._v("true"),s("br"),t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("其他返回 false")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("false")])])])])])]),t._v(" "),s("h3",{attrs:{id:"this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),s("h4",{attrs:{id:"this的指向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this的指向"}},[t._v("#")]),t._v(" this的指向")]),t._v(" "),s("p",[t._v("this是一个对象，在不同情况下this会有不同的指向。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对象调用，this指向该对象。")]),t._v(" "),s("div",{staticClass:"language-JavaScrpt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var obj = {\n    name:'小鹿',\n    age: '21',\n    print: function(){\n        console.log(this)\n        console.log(this.name + ':' + this.age)\n    }\n}\n\n// 通过对象的方式调用函数\nobj.print();        // this 指向 obj\n")])])])]),t._v(" "),s("li",[s("p",[t._v("直接调用，this指向全局window对象。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局调用函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this 指向 window")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("通过new方式实例化，this指向新创建的对象。")])]),t._v(" "),s("li",[s("p",[t._v("剪头函数中的this与声明所在的上下文相同。")])])]),t._v(" "),s("h4",{attrs:{id:"改变this指向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变this指向"}},[t._v("#")]),t._v(" 改变this指向")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("apply、call、 bind 三者都是用来"),s("u",[t._v("改变函数的this对象的指向的")]),t._v("；")])]),t._v(" "),s("li",[s("p",[t._v("apply、call、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；")])]),t._v(" "),s("li",[s("p",[t._v("apply、call、bind 三者都可以利用后续参数传参。apply和bind接收参数的方式是一致的，需要把参数按顺序传递过去。而call则是需要把参数放在数组里传递。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("bind 是"),s("u",[t._v("返回对应函数")]),t._v("，便于稍后调用；apply 、call 则是立即调用 。")])])]),t._v(" "),s("p",[t._v("由于箭头函数没有自己的 this 指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定  this），他们的第一个参数会被忽略。")]),t._v(" "),s("h3",{attrs:{id:"new"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[t._v("#")]),t._v(" new")]),t._v(" "),s("p",[t._v("参考文章："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN文档-new关键字"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("问：new的过程发生了什么？能否手写一个new操作符？")])]),t._v(" "),s("p",[t._v("new的过程包括以下四个阶段：")]),t._v(" "),s("ul",[s("li",[t._v("创建一个新对象")]),t._v(" "),s("li",[t._v("将新对象的"),s("code",[t._v("__proto__")]),t._v("属性指向原函数的prototype")]),t._v(" "),s("li",[t._v("绑定 this")]),t._v(" "),s("li",[t._v("返回新对象")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手写new操作符")]),t._v("\n\n\n")])])]),s("h3",{attrs:{id:"事件冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡"}},[t._v("#")]),t._v(" 事件冒泡")]),t._v(" "),s("h3",{attrs:{id:"函数柯里化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数柯里化"}},[t._v("#")]),t._v(" 函数柯里化")]),t._v(" "),s("h2",{attrs:{id:"es6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),s("h3",{attrs:{id:"promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),s("h2",{attrs:{id:"设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),s("h3",{attrs:{id:"工厂模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),s("h3",{attrs:{id:"发布订阅模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式"}},[t._v("#")]),t._v(" 发布订阅模式")]),t._v(" "),s("h2",{attrs:{id:"oop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oop"}},[t._v("#")]),t._v(" OOP")]),t._v(" "),s("h3",{attrs:{id:"面向对象的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象的特点"}},[t._v("#")]),t._v(" 面向对象的特点")]),t._v(" "),s("h3",{attrs:{id:"多态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[t._v("#")]),t._v(" 多态")]),t._v(" "),s("h3",{attrs:{id:"继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),s("h3",{attrs:{id:"多重继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多重继承"}},[t._v("#")]),t._v(" 多重继承")]),t._v(" "),s("h2",{attrs:{id:"浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),s("h3",{attrs:{id:"宏任务-微任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-微任务"}},[t._v("#")]),t._v(" 宏任务/微任务")]),t._v(" "),s("h3",{attrs:{id:"事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),s("h3",{attrs:{id:"重绘渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重绘渲染"}},[t._v("#")]),t._v(" 重绘渲染")]),t._v(" "),s("h3",{attrs:{id:"性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),s("h4",{attrs:{id:"大图片加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大图片加载"}},[t._v("#")]),t._v(" 大图片加载")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("图片从模糊到清晰")])]),t._v(" "),s("li",[s("p",[t._v("分段加载")])])]),t._v(" "),s("h2",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),s("h3",{attrs:{id:"布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),s("h4",{attrs:{id:"传统盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传统盒模型"}},[t._v("#")]),t._v(" 传统盒模型")]),t._v(" "),s("h5",{attrs:{id:"position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" Position")]),t._v(" "),s("h5",{attrs:{id:"display"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[t._v("#")]),t._v(" Display")]),t._v(" "),s("h4",{attrs:{id:"弹性盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弹性盒模型"}},[t._v("#")]),t._v(" 弹性盒模型")]),t._v(" "),s("h3",{attrs:{id:"响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[t._v("#")]),t._v(" 响应式")]),t._v(" "),s("h4",{attrs:{id:"viewport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[t._v("#")]),t._v(" viewport")]),t._v(" "),s("h3",{attrs:{id:"动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" 动画")])])}),[],!1,null,null,null);a.default=r.exports}}]);
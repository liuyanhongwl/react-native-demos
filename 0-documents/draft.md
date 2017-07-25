## 笔记草稿

```
创建 project
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```


```
npm start 启动packager服务
react-native run-ios 启动应用
```


```
"Unable to resolve module" 或者 缺少模块时
1. watchman watch-del-all
2. rm -rf node_modules && npm install
3. npm start -- --reset-cache
4. npm install <pkg>@<version>
```


```
babel-polyfill
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
http://www.ruanyifeng.com/blog/2016/01/babel.html
```


```
Components
- React.Component
- React.PureComponent

React提出的组件的概念，把UI隔离独立出来，让它可重用、独立使用。React.Component 是一个抽象基类， 一般需要继承它来使用。
React.PureComponent 很像 React.Component ，但是实现了 shouldComponentUpdate()  方法来浅比较 props 和 state , 可以用它这个特性来提高性能。注意它是浅比较，适合简单数据结构的比较。如果是复杂数据结构发生了变化，默认实现会返回false，不会更新页面。

有关组件更新的更多知识(https://segmentfault.com/a/1190000007811296)
```


```
函数的prototype属性
__proto__ 与 prototype    Object.getPrototypeOf 
- {实例}.__proto__  
- {函数}.prototype
```


```
ListView 源码
- 渲染使用ScrollView.js
- 懒加载item
- 用xcode调试时发现，RCTView始终保持subview一个均衡的个数。（ScrollView 的 removeClippedSubviews 属性，移除看不见的子视图）
- RCTView的subview不复用
```


```
ScrollView 源码
- removeClippedSubviews 属性可以移除看不见的子视图，但是不能复用
```


```
FlatList 
- 渲染可视区域的上下一部分视图
- 设置 removeClippedSubviews 属性了才可以移除看不见的子视图
```


```
SectionList
- 同FlatList一样，渲染可视区域的上下一部分视图
- 设置 removeClippedSubviews 属性了才可以移除看不见的子视图
```


```
动画
- requestAnimationFrame 
它接受一个函数作为唯一的参数，并且在下一次重绘之前调用此函数。

- setNativeProps
setNativeProps方法可以使我们直接修改基于原生视图的组件的属性，而不需要使用setState来重新渲染整个组件树。

- LayoutAnimation
优点：
1、效果非常的流畅，而且动画的过程很柔和，丝毫没有生硬的感觉。
2、可以灵活的配置动画参数，基本能满足单个动画的需求。
缺点：
1、如果要实现‘组合顺序’动画，比如先缩小50%、再向左平移100像素，那么就比较麻烦了，需要监听上一个动画的结束事件，再进行下一个。那么问题来了，configureNext第二个参数是可以监听动画结束的，但是只在IOS平台有效！
2、如果动画的效果更为复杂，比如同时执行动画，再顺序执行，对于编程来讲，需要做的事情很多，复杂度也大大提升。

- Animated
```


```
关于绑定this，为什么箭头函数不用绑定this？ 继承的函数也不用绑定this？
```


```
关于绑定this对象，call()、apply()、bind() 等方法

/**
@param {Object} [thisArg]
@param {Array} [argArray]
@return {*}
*/
Function.prototype.apply = function(thisArg,argArray) {};
/**
@param {Object} [thisArg]
@param {...*} [args]
@return {*}
*/
Function.prototype.call = function(thisArg,args) {};
Function = {};
/**
@param {T} thisArg
@param {...*} [arg]
@return {function(this:T)}
@template T
*/
Function.prototype.bind = function(thisArg,arg) {};

apply() 第二个参数是数组，
call() 第二个参数是reset参数,
bind() 第二个参数是reset参数, 返回值是函数
 
函数在哪里调用才决定了this到底引用的是啥

箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
```


```
获取屏幕尺寸
import { Dimensions } from ‘react-native’
Dimensions.get('window').height
```


```
获取组件尺寸
import { UIManager, findNodeHandle } from ‘react-native’
const handle = findNodeHandle(this.textInput)
UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
    //在这获取
})
```



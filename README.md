# Vue 源码阅读

### 1.Object.freeze()
`Object.freeze()` 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。

#### 语法

```javascript
Object.freeze(obj)
```
#### 参数


|字段|描述|
|-|-|
|obj|要被冻结的对象|


#### 返回值

> 被冻结的对象。


### 2.isFinite()
该全局 `isFinite()` 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。
<br>
isFinite 是全局的方法，不与任何对象有关系。
你可以用这个方法来判定一个数字是否是有限数字。isFinite 方法检测它参数的数值。如果参数是 NaN，正无穷大或者负无穷大，会返回false，其他返回 true。

#### 语法

```javascript
isFinite(testValue)
```
#### 参数


|字段|描述|
|-|-|
|testValue|用于检测有限性（finiteness）的值。|


#### 返回值

> 被冻结的对象。


#### 示例

```javascript
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(0);         // true
isFinite(2e64);      // true, 在更强壮的Number.isFinite(null)中将会得到false

isFinite("0");       // true, 在更强壮的Number.isFinite('0')中将会得到false
```

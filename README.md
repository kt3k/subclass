# subclassjs v1.3.0

> Easy simple class inheritance tool for es5 or above.

- Class definition by a **function**:zap:, not by an object.
- `instanceof` works.
- Sets `prototype.constructor` properly
- parent method call support
- no global side effect

# Usage

## Basic

```js
subclass = require('subclassjs');

// define a class
var Child = subclass(Parent, function (pt) {

    pt.constuctor = function () { /* blah */ };

    pt.myMethod = function () { /* ... */ };

    //...

});
```

The first argument `pt` of the defining function is the `prototype` object of the child class to be defined. You can define methods of the child class by setting the properties on it.

## Default parent

You can omit first argument. If it's omitted, it inherits Object class.

```js
var MyClass = subclass(function (pt) { /* ... */ });
```

The above is the same as the below;

```js
var MyClass = subclass(Object, function (pt) { /* ... */ });
```

## Inheritance

You can inherit classes. The second parameter of the defining function is parent's `prototype` (not the parent class itself) and you can call parent's method through it.


```js

var ChildClass = subclass(ParentClass, function (pt, parent) {

    pt.constructor = function () {

        parent.constructor.apply(this, arguments);

        // do something

    };

    pt.myMethod = function () {

         var result = parent.myMethod.apply(this, arguments);

         // do something

         return result;

    };

});
```


## Static methods

You can define static methods.

```js

var ChildClass = subclass(ParentClass, function (pt) {

    pt.constructor.staticMethod = function (str) {

        // ...

    };

});

```

In this case, you can call `ChildClass.staticMethod()`

# Other approaches to write classes

- [runtime]
  - Ext JS ( Ext.extend )
  - [function-branch](https://github.com/kt3k/function-branch)
  - npm search of inheritance, subclass or subtype gives you a lot of examples
- [through compiler]
  - babel
  - TypeScript
  - CoffeeScript
  - Traceur
  - sweetjs
  - etc...

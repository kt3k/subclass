# subclassjs v1.2.0

> Yet another inheritance utility

- class extension by a function, not by an object literal (as other libs do)
- support of instanceof class detection
- setting prototype.constructor properly
- parent method call support
- no global side effect

# Usage

## Basic

```js
subclass = require('subclassjs');

// define a class
var Child = subclass(Parent, function (pt) {
     'use strict';

     pt.myMethod = function () { /* ... */ };

     //...

});
```

The first argument `pt` of the defining function is the actual prototype object of the child class to be defined. You can define methods of the child class by setting the properties on it.

## Default parent

You can omit first argument. If it's omitted, it inherits Object class.

```js
var MyClass = subclass(function (pt) { /* ... */ });
```

The above is the same as the below;

```js
var MyClass = subclass(Object, function (pt) { /* ... */ });
```

## Constructor

You can define the constructor of a child class as follows.

```js

var ClassFoo = subclass(function (pt) {

    pt.constructor = function () {

        this.bar = 42;

    };

});

```


## Inheritance

You can inherit classes. The second parameter of the defining function is parent's prototype and you can call parent's method through it.


```js

var ChildClass = subclass(ParentClass, function (pt, parent) {

    pt.constructor = function () {

        parent.constructor.apply(this, arguments);

        // do something

    };

    pt.myMethod = function () {

         var result = parent.myMethod();

         // do something

         return result;

    };

});
```


## Default constructor

`subclass` provides the default constructor for a child class.

```js

var ChildClass = subclass(ParentClass, function (pt) {

    // you can define static method here
    pt.constructor.staticMethod = function (str) {

        // ...

    };

});

```

# Other approaches to write classes in ES5

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

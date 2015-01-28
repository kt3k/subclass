# subclassjs v1.1.0

> ES5 subtyping utility

- class extension by a function, not by an object literal (as other libs do)
- support of instanceof class detection
- setting prototype.constructor properly
- parent method call support
- no global side effect

# Usage

```js
subclass = require('subclassjs');

// define plain old javascript class
var MyClass = subclass(Object, function (pt) {
     'use strict';

     pt.myMethod = function () {...};
     ...

});
```


```js
subclass = require('subclassjs');

// inheritance
var MySubclass = subclass(MyClass, function (pt) {
     'use strict';

     pt.myAnotherMethod = function () {
         // ...
     };

     // ...

});
```


```js
subclass = require('subclassjs');

// example of calling parent's method
// `super` means basically parent's prototype
var MySubclass = subclass(MyClass, function (pt, parent) {
    'use strict';

    pt.myMethod = function () {

         var result = parent.myMethod();

         // ... do something ...

         return result;

    };

});
```


# Other approaches to write classes in ES5

- [runtime]
  - Ext JS ( Ext.extend )
  - [function-branch](https://github.com/kt3k/function-branch)
  - npm search of inheritance, subclass or subtype gives you a lot of examples
- [through compiler]
  - TypeScript
  - CoffeeScript
  - Traceur
  - sweetjs
  - etc...

# subclassjs v1.0.0

> ES5 subtyping utility

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
var MySubclass = subclass(MyClass, function (pt, super) {
    'use strict';

    pt.myMethod = function () {

         var result = super.myMethod();

         // ... do something ...

         return result;

    };

});
```

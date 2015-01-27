# subclassjs v1.0.0

> ES5 subtyping utility

- class extension by a function, not by an object literal (as a lot of others do)
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
var MySubclass = subclass(MyClass, function (pt, super) {
    'use strict';

    pt.myMethod = function () {

         var result = super.myMethod();

         // ... do something ...

         return result;

    };

});
```

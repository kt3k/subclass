/**
 * subclassjs v1.3.0
 */


(function () {
    'use strict';

    /**
     * Generates a subclass with given parent class and additional class definition.
     *
     * @param {Function} parent The parent class constructor
     * @param {Function<(pt: Object, super: Object) => void>} classDefinition
     * @returns {Function}
     */
    var subclass = function (parent, classDefinition) {

        if (classDefinition == null) {

            // if there's no second argument
            // then use the first argument as class definition
            // and suppose parent is Object

            classDefinition = parent;
            parent = Object;

        }

        if (parent == null) {

            throw new Error('parent cannot be null: definingFunction=' + classDefinition.toString());

        }

        // create proxy constructor for inheritance
        var proxy = function () {};

        proxy.prototype = parent.prototype;

        var prototype = new proxy();


        // creates child's default constructor
        // this can be overwritten in classDefinition
        prototype.constructor = function () {

            proxy.prototype.constructor.apply(this, arguments);

        };


        if (typeof classDefinition === 'function') {

            // apply the given class definition
            classDefinition(prototype, parent.prototype);

        } else if (classDefinition == null) {

            // do nothing

        } else {

            throw new Error('the type of classDefinition is wrong: ' + typeof classDefinition);

        }



        // set prototype to constructor
        prototype.constructor.prototype = prototype;


        return prototype.constructor;

    };


    if (typeof module !== 'undefined' && module.exports) {

        // CommonJS
        module.exports = subclass;

    } else {

        // window export
        window.subclass = subclass;
    }

}());

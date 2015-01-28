/**
 * subclassjs v1.1.0
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

        // create proxy constructor for inheritance
        var proxy = function () {};

        proxy.prototype = parent.prototype;

        var prototype = new proxy();


        if (typeof classDefinition === 'function') {

            // apply the given class definition
            classDefinition(prototype, parent.prototype);

        } else if (classDefinition == null) {

            // do nothing

        } else {

            throw Error('Class.branch(function (prototype, super) {...})');

        }


        if (prototype.constructor === proxy.prototype.constructor) {

            // if no child constructor definition
            // create one for the child
            prototype.constructor = function () {

                proxy.prototype.constructor.apply(this, arguments);

            };
        }


        // set prototype to constructor
        prototype.constructor.prototype = prototype;


        return prototype.constructor;

    };


    if (typeof define === 'function' && define.amd) {

        // AMD
        define(function () {
            return subclass;
        });

    } else if (typeof module !== 'undefined' && module.exports) {

        // CommonJS
        module.exports = subclass;

    } else {

        // global export
        this.subclass = subclass;
    }

}.call(this));

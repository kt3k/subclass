/**
 * subclassjs v1.0.0
 */

/**
 * Generates a subclass with given parent class and additional class definition.
 *
 * @param {Function} parent The parent class constructor
 * @param {Function<(pt: Object, super: Object) => void>} classDefinition
 * @returns {Function}
 */
module.exports = function (parent, classDefinition) {

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

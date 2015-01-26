
subclass = require('./');

describe('subclass', function () {
    'use strict';

    it('returns a function', function () {

        expect(subclass(Object, function () {})).to.be.instanceof(Function);
        expect(subclass(Object, null)).to.be.instanceof(Function);

    });

    it('throws an error when invoked with things except function or null', function () {

        expect(function () {
            subclass(Object, 'abc');
        }).to.throw(Error);

        expect(function () {
            subclass(Object, 123);
        }).to.throw(Error);

        expect(function () {
            subclass(Object, {});
        }).to.throw(Error);

        expect(function () {
            subclass(Object, []);
        }).to.throw(Error);

    });


    it('creates class with enhancement of prototype', function () {

        var MyClass = subclass(Object, function (pt) {

            pt.method = function () {

                return 42;

            };

        });


        var myObj = new MyClass();

        expect(myObj.constructor).to.equal(MyClass);
        expect(myObj.method).to.be.instanceof(Function);
        expect(myObj.method()).to.equal(42);

    });


    it('subclasses existing class', function () {

        var MyClass = subclass(Object, function (pt) {

            pt.method = function () {
                return 36;
            };

        });

        var MySubclass = subclass(MyClass, function (pt, parent) {

            pt.method = function () {
                return parent.method() * 2;
            };

        });

        var myObj = new MySubclass();

        expect(myObj).to.be.instanceof(MyClass);
        expect(myObj).to.be.instanceof(MySubclass);
        expect(myObj.constructor).to.not.equal(MyClass);
        expect(myObj.constructor).to.equal(MySubclass);
        expect(myObj.method()).to.equal(72);

    });


    it('creates class with given constructor', function () {

        var MyClass = subclass(Object, function (pt) {

            pt.constructor = function (name, age) {
                this.name = name;
                this.age = age;
            };

        });

        var myObj = new MyClass('John', 36);

        expect(myObj).to.be.instanceof(MyClass);
        expect(myObj.constructor).to.equal(MyClass);
        expect(myObj.name).to.equal('John');
        expect(myObj.age).to.equal(36);

    });


    it('inherits constructor if subclass does not provide one', function () {

        var MyClass = subclass(Object, function (pt) {

            pt.constructor = function (name, age) {
                this.name = name;
                this.age = age;
            };

        });

        var MySubclass = subclass(MyClass, function (pt) { });

        var myObj = new MySubclass('Paul', 34);

        expect(myObj).to.be.instanceof(MyClass);
        expect(myObj).to.be.instanceof(MySubclass);
        expect(myObj.constructor).to.equal(MySubclass);
        expect(myObj.constructor).to.not.equal(MyClass);
        expect(myObj.name).to.equal('Paul');
        expect(myObj.age).to.equal(34);

    });

});

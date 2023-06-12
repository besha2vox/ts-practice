var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var House = /** @class */ (function () {
    function House(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (!this.door) {
            console.log('Door is close');
            return;
        }
        this.tenants.push(person);
        console.log('Person inside');
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse(key) {
        return _super.call(this, key) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSignature() !== this.key.getSignature()) {
            console.log('Key to another door');
            return (this.door = false);
        }
        console.log('Door is open');
        return (this.door = true);
    };
    return MyHouse;
}(House));
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.round(Math.random() * Math.pow(10, 10));
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var key = new Key();
var person = new Person(key);
var myHouse = new MyHouse(key);
myHouse.openDoor(person.getKey());
myHouse.comeIn(person);

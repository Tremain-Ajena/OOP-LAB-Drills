let person1 = {
    name: 'Latonya',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
person1.sayHello();

let person2 = {
    name: 'Ryan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
person2.sayHello();

let person3 = {
    name: 'Lyric',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
person3.sayHello();

let person4 = {
    name: 'Reign',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
person4.sayHello();

let person5 = {
    name: 'Regan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
person5.sayHello();

function People(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
   People.prototype.greetings = function () {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
    };
};
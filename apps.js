// Object Literals, Psuedo Classes and Methods Section

// Below is the Object Literals Part
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

// Below is the Psuedo class and Methods part
function People(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
   People.prototype.greetings = function () {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
    };
};

let p1 = new People('Latonya', 51, 'Birmingham');
let p2 = new People('Ryan', 21, 'Birmingham');
let p3 = new People('Lyric', 22, 'Birmingham');
let p4 = new People('Reign', 12, 'Birmingham');
let p5 = new People('Regan', 10, 'Birmingham');

p1.greetings();
p2.greetings();
p3.greetings();
p4.greetings();
p5.greetings();

// Below is the ES6 Class Syntax Part
class Humanity {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    greetings() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and I live in ${this.city}. Yo!`);

    }
};

let h1 = new Humanity('Latonya', 51, 'Birmingham');
let h2 = new Humanity('Ryan', 21, 'Birmingham');
let h3 = new Humanity('Lyric', 22, 'Birmingham');
let h4 = new Humanity('Reign', 12, 'Birmingham');
let h5 = new Humanity('Regan', 10, 'Birmingham');

h1.greetings();
h2.greetings();
h3.greetings();
h4.greetings();
h5.greetings();

// Inheritance Section
// I used the more simplified ES6 version of Inheritance to complete this section of the lab.
class Vehicle {
    constructor(type, manufacturer, wheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle () {
        console.log(`This is a ${this.type} made by ${this.manufacturer} with ${this.wheels}.`);
    }
};

class Sedan extends Vehicle {
    constructor(type, manufacturer, wheels, size, mpg) {
        super(type, manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle () {
        console.log(`This is a ${this.type} made by ${this.manufacturer} with ${this.wheels}, a ${this.size}, and ${this.mpg}.`);
    }
};

class Motorcycle extends Vehicle {
    constructor(type, manufacturer, wheels, steering, doors) {
        super(type, manufacturer, wheels);
        this.steering = steering;
        this.doors = doors;
    }
    aboutVehicle () {
        console.log(`This is a ${this.type} made by ${this.manufacturer} with ${this.wheels}, ${this.steering}, and ${this.doors}.`);
    }
};

let s1 = new Sedan ('2007 Forenza', 'Suzuki', '4 wheels', 'small size', '28 mpg');
let s2 = new Sedan ('2019 Versa', 'Nissan', '4 wheels', 'small size', '30 mpg');
let m1 = new Motorcycle ('1981 CB400A Hondamatic', 'Honda', '2 wheels', 'handlebars', 'no doors');

console.log(s1);
console.log(s2);
console.log(m1);

s1.aboutVehicle();
s2.aboutVehicle();
m1.aboutVehicle();


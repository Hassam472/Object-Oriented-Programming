"use strict";
//Object-oriented Programming
//These are 4 Principles
//1 Encapsulation |Modifier initialization in class property.
//2 Inheritance |extend class
//3 Polymorphism |single method used many times through override.
//4 Abstraction
//Modifier
//1 Public |access property inside & outside the class.
//2 Private |not access property outside the class.
//3 Protected |not access property outside the class but access property another nested class.
//4 readonly
class Person {
    constructor(name, age, salary) {
        //Parameters
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    walk() {
        //Object Function
        console.log(this.name, this.age, this.salary, "walking...");
    }
}
let per1 = new Person("hassam", 23, 32000); //Arguements
per1.walk(); //Object Function Call
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(this.name, "was Bau Bau");
    }
}
class cat extends Animal {
    //Inheritance
    makeSound() {
        console.log(this.name, "Meow Meow"); //Polymorphism
    }
}
let d1 = new cat("Kitty");
d1.makeSound();
class Circle {
    //Abstraction
    draw() {
        console.log("Drawing a Circle");
    }
}
let c1 = new Circle();
c1.draw();

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
};

person.greet();

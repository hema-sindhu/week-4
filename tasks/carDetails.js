function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


Car.prototype.printDetails = function() {
    console.log(`Car Details: ${this.year} ${this.make} ${this.model}`);
};

const myCar = new Car('Toyota', 'Corolla', 2022);

myCar.printDetails();

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    printDetails() {
        console.log(`Animal Name: ${this.name}`);
        console.log(`Species: ${this.species}`);
    }
}
const myAnimal = new Animal('Lion', 'Panthera leo');
myAnimal.printDetails();

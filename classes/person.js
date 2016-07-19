/*
* ES6 class representing a person
*/
class Person {

  //_name
  //_age

  // Constructor of the class taking the person's name and age.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Getter of the name
  get name() {
    return this._name;
  }

  // Setter of the name
  set name(value) {
    this._name = value;
  }


  // Getter of the age
  get age() {
    return this._age;
  }

  // Setter of the age
  set age(value) {
    if (typeof value !== 'number') {
      throw new Error('"age" must be a number.');
    }
    this._age = value;
  }

}

// Exports the Person class
module.exports = Person;

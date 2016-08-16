let chai  = require('chai'),
    path  = require('path'),
    Person = require(path.join(__dirname, '../..', '/classes/person'));

chai.should();

describe('When testing the Person class', () => {

  let person;

  beforeEach(() => {
    person = new Person('Wellington', 150);
  });

  it('returns the correct name', () => {
    person.name.should.equal('Wellington');
  });

  it('returns the correct age', () => {
    person.age.should.equal(150);
  });

  it('allows the name to be changed', () => {
    person.name = 'New name';
    person.name.should.not.equal('Wellington');
    person.name.should.equal('New name');
  });

  it('allows the age to be changed', () => {
    person.age = 200;
    person.age.should.not.equal(150);
    person.age.should.equal(200);
  });

  it('does not allow to set an invalid age', () => {
    (() => {
      person.age = 'invalid age';
    }).should.throw(Error);
    person.age.should.equal(150);
  });

});

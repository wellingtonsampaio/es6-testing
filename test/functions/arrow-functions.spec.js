let chai  = require('chai').should();

describe('When testing arrow functions', () => {

  it('it is of type Function', () => {
    let arrowFunction = () => {};
    arrowFunction.should.be.instanceof(Function);
  });

  it('bound to the scope where is was declared', (done) => {
    // set a random propety to this to check the scope of the callbackfunction
    this.arrow = 'arrow';

    // Create an async call to check the scope of the callback arrow function
    setTimeout(() => {
      this.should.have.property('arrow');
      done();
    }, 0);

  });

  it('is NOT bound to the scope where is was declared if NOT an arrow function', (done) => {
    // set a random propety to this to check the scope of the callbackfunction
    this.arrow = 'arrow';

    // Create an async call to check the scope of the callback non-arrow function
    setTimeout(function() {
      this.should.not.have.property('arrow');
      done();
    }, 0);

  });

});

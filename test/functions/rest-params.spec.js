let chai  = require('chai').should();

describe('When testing rest parameters', () => {

  function testFunction(name, ...numbers) {
    return {
      name: name,
      numbers: numbers
    };
  }

  it('the rest parameter is an Array', () => {
    let result = testFunction('Wellington', 1, 2, 3);
    result.numbers.should.be.instanceof(Array);
  });

  it('the length of the Array matches the number of values informed to the rest parameter', () => {
    let result = testFunction('Wellington', 1, 2, 3, 4, 5);
    result.numbers.should.have.lengthOf(5);
  });

  it('must be the last formal parameter', () => {
    // Would generate a SyntaxError > let result = testFunction(1, 2, 3, 'Wellington');
    let result = testFunction('Wellington', 1, 2, 3);
  });

});

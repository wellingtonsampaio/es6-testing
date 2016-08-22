let chai  = require('chai').should();

describe('When testing variables declared as const', () => {

  it('requires an initial value', () => {
    // The redeclaration below would cause a SyntaxError
    //const MAX_VALUE;
  });

  it('cannot be reassigned', () => {
    (() => {
      const MAX_VALUE = 0;
      MAX_VALUE = 10;
    }).should.throw(TypeError);
  });

  it('is scoped to the nearest block', () => {
    // Outer block declaration
    const TEST_ID = 1;
    {
      // Inner block declaration
      const TEST_ID = 11;
      TEST_ID.should.equal(11);
    }
    TEST_ID.should.equal(1);
  });

  it('is not hoisted', () => {
    (() => {
      MIN_VALUE.should.equal(100);
      const MIN_VALUE = 100;
    }).should.throw(ReferenceError);
  });

});

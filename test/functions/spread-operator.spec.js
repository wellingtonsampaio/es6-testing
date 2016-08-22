let chai  = require('chai').should();

describe('When testing spread operators', () => {

  function testFunction(param1, param2, param3) {
    return {
      param1: param1,
      param2: param2,
      param3: param3,
    };
  }

  function restParamTestFunction(...values) {
    return {
      values: values
    };
  }

  it('assigns each value of the array to the n first parameters of the function', () => {
    let numbers = [1, 2, 3];
    let result = testFunction(...numbers);
    result.param1.should.equal(1);
    result.param2.should.equal(2);
    result.param3.should.equal(3);
  });

  it('can be combined with non-spread operators', () => {
    let numbers = [1, 2];
    let result = testFunction(...numbers, 50);
    result.param1.should.equal(1);
    result.param2.should.equal(2);
    result.param3.should.equal(50);
  });

  it('works with rest parameters', () => {
    let numbers = [1, 2, 3];
    let result = restParamTestFunction(...numbers);
    result.values.should.include(1);
    result.values.should.include(2);
    result.values.should.include(3);
    result.values.should.not.include(4);
  });

});

let chai  = require('chai').should();

describe('When testing default function parameters', () => {

  function testFunction(p1, p2 = 'default') {
    return {
      p1: p1,
      p2: p2
    };
  }

  it('is undefined if a value is not informed for a non-default function param', () => {
    let result = testFunction();
    (result.p1 === undefined).should.be.true;
  });

  it('is equal to the default value if a value is not informed for a default function param', () => {
    let result = testFunction();
    result.p2.should.equal('default');
  });

  it('is equal to the value passed if a value is informed for a default function param', () => {
    let result = testFunction('Wellington', 'Sampaio');
    result.p2.should.equal('Sampaio');
  });

});

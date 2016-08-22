let chai  = require('chai').should();

describe('When testing named parameters', () => {

  function testFunction(name, {email, mobile = '9999-8877', home}) {
    return {
      name: name,
      email: email,
      mobile: mobile,
      home: home
    };
  }

  it('throws a TypeError if the named parameter object is not informed', () => {
    (() => {
      testFunction('Wellington');
    }).should.throw(TypeError);
  });

  it('supports default values', () => {
    let result = testFunction('Wellington', {email: 'email@email.com'});
    result.mobile.should.equal('9999-8877');
  });

  it('assigns the named parameters values to variables inside the function scope', () => {
    let result = testFunction('Wellington', {email: 'email@email.com'});
    result.email.should.equal('email@email.com');
  });

});

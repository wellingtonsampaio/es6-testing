let chai  = require('chai');

chai.should();

describe('When testing variables declared as let', () => {

  it('does not require an initial value', () => {
    (() => {
      let name;
    }).should.not.throw(Error);
  });

  it('can be reassigned', () => {
    let name = 'Wellington';
    name.should.equal('Wellington');
    name = 'Sampaio';
    name.should.equal('Sampaio');
  });

  it('cannot be redeclared in the same block', () => {
    let name = 'Wellington';
    name.should.equal('Wellington');
    // The redeclaration below would cause a SyntaxError
    //let name = 'Sampaio';
  });

  it('is scoped to the nearest block', () => {
    // Outer block declaration
    let name = 'Wellington';
    {
      // Inner block declaration
      let name = 'Sampaio';
      name.should.equal('Sampaio');
    }
    name.should.equal('Wellington');
  });

  it('is not visible outside the block', () => {
    (() => {
      {
        let name = 'Sampaio';
        name.should.equal('Sampaio');
      }
      name.should.equal('Sampaio');
    }).should.throw(ReferenceError);
  });

  it('is not hoisted', () => {
    (() => {
      name.should.equal('Wellington');
      let name = 'Wellington';
    }).should.throw(ReferenceError);
  });

});

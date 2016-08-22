let chai  = require('chai').should();

describe('When testing variables declared as var', () => {

  it('does not require an initial value', () => {
    (() => {
      var name;
    }).should.not.throw(Error);
  });

  it('can be reassigned', () => {
    var name = 'Wellington';
    name.should.equal('Wellington');
    name = 'Sampaio';
    name.should.equal('Sampaio');
  });

  it('can be redeclared in the same block', () => {
    {
      var name = 'Wellington';
      name.should.equal('Wellington');
      var name = 'Sampaio';
      name.should.equal('Sampaio');
    }
  });

  it('is not scoped to the nearest block', () => {
    // Outer block declaration
    var name = 'Wellington';
    name.should.equal('Wellington');
    {
      // Inner block declaration
      var name = 'Sampaio';
      name.should.equal('Sampaio');
    }
    name.should.equal('Sampaio');
  });

  it('is visible outside the block and hoisted', () => {
      {
        var name = 'Sampaio';
        name.should.equal('Sampaio');
      }
      name.should.equal('Sampaio');
  });

});

const expect = require('chai').expect;

describe( 'Test suite', () => {
    it( 'should pass', () => { 
        expect( true ).to.be.true;
    } );
    it( 'should fail', () => {
        expect( true ).to.be.false;
    } );
} );

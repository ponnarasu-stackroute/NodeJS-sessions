const add =require('./add.js');
const assert = require('chai').assert;

describe('test suite',function(){
    it('add 2 positive num',function(done){
        console.log('posiyive test');
        const su= add.add(2,5);
        assert.equal(su,7,'sunis 7');
        done();
    })

    
    it('add 2 negative num',function(done){
        console.log('negativetest')
        done();
    })
})
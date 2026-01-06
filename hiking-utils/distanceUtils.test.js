import test from 'node:test';
import assert from 'node:assert';
import kmToMeters from './distanceUtils.js';

test("Check km", ()=>{
    assert.strictEqual(kmToMeters(5),5000);
});
test("Chck Error", ()=>{
    assert.throws(()=>{
        kmToMeters("abc")
    })
})
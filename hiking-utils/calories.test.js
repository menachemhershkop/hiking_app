import test from 'node:test';
import assert from 'node:assert';
import caloriesBurned from './calories.js';

test("CHeck result", ()=>{
    assert.strictEqual(caloriesBurned(15,12), 186.48000000000002)
});
test("Zero or negative weight", ()=>{
    assert.throws(()=>{
        caloriesBurned(-2,14)
    });
});
test("CHeck decimal", ()=>{
    assert.strictEqual(caloriesBurned(15,5.5), 85.47)
});
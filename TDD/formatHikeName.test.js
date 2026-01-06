import test, { after, before, describe } from 'node:test';
import assert from 'node:assert';
import formatHikeName from './formatHikeName.js';

describe('TDD, tester', ()=>{
    test('Check name', ()=>{assert.deepEqual(formatHikeName('Forest Loop', 'Galilee')), 'Hike: Forest Loop (Galilee)'})

})
import test, { after, before, describe } from 'node:test';
import assert from 'node:assert';
import { app } from './app.js';
import checker from './check_whther.js';
const answer = {
  safe: true,
  message: "All conditions are good for hiking!"
}
const negetive = {
  "safe": false,
  "message": "Too windy to hike!"
}

// const data =await fetch('http://localhost:3000/check-weather',{
//         method: 'POST',
//         headers: {
//       'Content-Type': 'application/json',
//     },
//         body: JSON.stringify({temperature: 15, windSpeed: 42})})
//         .then(res => res.json())
//   .then(data => console.log('Success:', data))
//   .catch(err => console.error('Error:', err));
//   console.log(1,data);
let server;
  before(()=>{server = app.listen(3000)});
  after(()=> server.close());

describe('Server testing',async ()=>{
    test("Check work", ()=>{
        assert.deepEqual(checker(15, 25), answer)
    });
    test('check whathers',async ()=> {assert.deepEqual(await fetch('http://localhost:3000/check-weather',{
        method: 'POST',
        headers: {
      'Content-Type': 'application/json',
    },
        body: JSON.stringify({temperature: 15, windSpeed: 42})})
        .then(res => res.json()), answer)})
})


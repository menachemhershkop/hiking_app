import test, { after, before, describe } from 'node:test';
import assert from 'node:assert';
import { app } from './app.js';
import checker from './check_whther.js';
const answer = {
  "safe": true,
  "message": "All conditions are good for hiking!"
}
// const data =fetch('http://localhost:3000/check-weather',{
//         method: 'POST',
//         headers: {
//       'Content-Type': 'application/json',
//     },
//         body: JSON.stringify({temperature: 15, windSpeed: 42})}).then(res => res.json())
//   .then(data => console.log('Success:', data))
//   .catch(err => console.error('Error:', err));

describe('Server testing',async ()=>{
    before(()=> {app.listen(3000)} );
    test('chck whether', async()=>{
    const res = await request(app).get('/check-weather');
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(res.body, answer);
    })
  after(()=>{app.close()})
})
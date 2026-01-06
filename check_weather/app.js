import express from 'express';
import checker from './check_whther.js';

export const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT);
console.log('app listning on port', PORT);

app.get('/', (req, res)=>{
    res.json({'msg':'heyy...'})
})

app.post('/check-weather', (req,res)=>{
    const {temperature, windSpeed}= req.body;
    res.status(200).json(checker(temperature, windSpeed))
})
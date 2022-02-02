import express from 'express';
import router from './routes/router';
const app = express();

app.use('/router', router)
app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(8081, ()=>{
    console.log('Server started')
})
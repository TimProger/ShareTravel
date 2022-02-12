require('dotenv').config();
import bodyParser from "body-parser";
import express from 'express';
import router from './routes/router';
const app = express(),
      PORT: string | number = process.env.PORT || 8081

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)

app.listen(PORT, (): void => {
    console.log(`Server started on port ${PORT}`)
})
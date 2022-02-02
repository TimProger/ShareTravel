require('dotenv').config();
import express from 'express';
import router from './routes/router';
const app = express();
const PORT: string | number = process.env.PORT || 8081

app.use('/router', router)

app.listen(PORT, (): void => {
    console.log(`Server started on port ${PORT}`)
})
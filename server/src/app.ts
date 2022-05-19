import express from 'express';
import 'express-async-errors';
import rateLimiter from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
// @ts-ignore
import xss from 'xss-clean';
import config from 'config';
// @ts-ignore
import fileUpload from 'express-fileupload';
import connectDB from './utils/connectDB';
import log from './utils/logger';
import routes from './routes';

const port = config.get<number>('port');

const app: express.Express = express();

app.set('trust proxy', 1); // Ignore proxy's IP
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200,
}));

app.use(express.urlencoded({
    extended: true,
    limit: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
}));

app.use(fileUpload({
    createParentPath: true
}));

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

routes(app);

app.listen(port, async (): Promise<void> => {
    log.info(`Server running at http://localhost:${port}`);
    await connectDB();
});
import { Express, Request, Response } from "express";
import authRouter from './routes/auth.route'
import notFound from "./middleware/not-found.middleware";
import errorHandler from "./middleware/error-handler.middleware";
import { UnauthenticatedError } from "./errors";
import User from './models/user.model';
import { StatusCodes } from "http-status-codes";

interface RequestWithFiles extends Request {
    files?: any;
}

const routes = (app: Express) => {
    app.get('/', (req: Request, res: Response) => {
        res.send('PUK');
    });

    app.use('/api/v1/auth', authRouter);

    app.post('/api/v1/upload-avatar/:userName', async (req: RequestWithFiles, res: Response): Promise<void> => {
        const { userName } = req.params;

        const user = await User.findOne({ userName });

        if (!user) {
            throw new UnauthenticatedError(`No user named ${userName}`);
        }

        if (!req.files) {
            res
                .status(StatusCodes.BAD_REQUEST)
                .json({
                    message: 'No file uploaded'
                });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv(`./static/${userName}/avatar/` + avatar.name);

            //send response
            res
                .status(StatusCodes.CREATED)
                .json({
                    message: 'File uploaded',
                    data: {
                        name: avatar.name,
                        mimetype: avatar.mimetype,
                        size: avatar.size
                    }
                });
        }
    });

    app.use(notFound);
    app.use(errorHandler);
}

export default routes;
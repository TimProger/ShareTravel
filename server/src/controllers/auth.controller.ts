import User from '../models/user.model';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors';
import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import config from "config";

const register = async (req: Request, res: Response): Promise<void> => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res
        .status(StatusCodes.CREATED)
        .json({ user, token });
}

const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError('Please provide user credentials');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new UnauthenticatedError(`No user with an email of ${email}`);
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid password');
    }

    const token = user.createJWT();
    res
        .status(StatusCodes.OK)
        .json({ user, token });
}

const token = async (req: Request, res: Response): Promise<void> => {
    const {token} = req.body
    const jwtSecret: string = config.get<string>('jwtSecret');
    const jwtLifetime: string = config.get<string>('jwtLifetime');
    const decoded = jwt.verify(token, jwtSecret)
    // @ts-ignore
    const user = await User.findOne({ _id: decoded.userId });
    const newToken = jwt.sign({ userId: user._id, name: user.name }, jwtSecret, { expiresIn: jwtLifetime });
    res.send({user, token: newToken})
}

export {
    register,
    login,
    token
}
import User from '../models/user.model';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors';
import { Request, Response } from 'express';

const register = async (req: Request, res: Response): Promise<void> => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();

    res
        .status(StatusCodes.CREATED)
        .json({ user: { name: user.name }, token });
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
        .json({ user: { name: user.name }, token });
}

export {
    register,
    login
}
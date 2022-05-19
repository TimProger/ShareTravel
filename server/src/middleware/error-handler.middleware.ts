import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import log from '../utils/logger';

const errorHandler = (err: any, _: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
	log.error(err.message);

	const customError = {
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		msg: err.message || 'Well, shit'
	}

	if (err.name === 'CastError') {
		customError.msg = `No item found with an id of ${err.value}`;
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}
	if (err.name === 'ValidationError') {
		//@ts-ignore
		customError.msg = Object.values(err.errors).map(item => item.message).join(', ');
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}
	if (err.code === 11000) {
		customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please provide another`;
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}
	return res.status(customError.statusCode).json({msg: customError.msg});
	// return res.status(customError.statusCode).json({err});
}

export default errorHandler;
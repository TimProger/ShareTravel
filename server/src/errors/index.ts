import { StatusCodes } from 'http-status-codes';

class CustomError extends Error {
    constructor(readonly message: string) {
        super(message);
    }
}

class BadRequestError extends CustomError {
    readonly statusCode: number = StatusCodes.BAD_REQUEST;

    constructor(readonly message: string) {
        super(message);
    }
}

class NotFoundError extends CustomError {
    readonly statusCode: number = StatusCodes.NOT_FOUND;

    constructor(readonly message: string) {
        super(message);
    }
}

class UnauthenticatedError extends CustomError {
    readonly statusCode: number = StatusCodes.UNAUTHORIZED;
    
    constructor(readonly message: string) {
        super(message);
    }
}

class UnauthorizedError extends CustomError {
    readonly statusCode: number = StatusCodes.UNAUTHORIZED;

    constructor(readonly message: string) {
        super(message);
    }
}

export {
    CustomError,
    BadRequestError,
    UnauthorizedError,
    UnauthenticatedError,
    NotFoundError
}
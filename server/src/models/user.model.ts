import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

interface UserDocument extends mongoose.Document {
    email: string,
    name: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    comparePassword(candidatePassword: string): Promise<boolean>
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Пожалуйста, введите имя'],
    },
    surname: {
        type: String,
        required: [true, 'Пожалуйста, введите фамилию'],
    },
    email: {
        type: String,
        required: [true, 'Пожалуйста, введите почту'],
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid email'
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Пожалуйста, введите пароль'],
        minlength: 8
    }
});

UserSchema.pre('save', async function (): Promise<void> {
    const user = this as UserDocument;

    const salt: string = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt); // Производство гашиша
});

UserSchema.methods.createJWT = function (): string {
    const user = this as UserDocument;
    const jwtSecret: string = config.get<string>('jwtSecret');
    const jwtLifetime: string = config.get<string>('jwtLifetime');

    return jwt.sign({ userId: user._id, name: user.name }, jwtSecret, { expiresIn: jwtLifetime });
}

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    const user = this as UserDocument;

    return await bcrypt.compare(candidatePassword, user.password).catch((err) => false);
}

export default mongoose.model('User', UserSchema);
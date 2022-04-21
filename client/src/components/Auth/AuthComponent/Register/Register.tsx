import React from "react";
import './Register.css'
import { useForm } from "react-hook-form";
import {NavLink} from "react-router-dom";

interface FormData {
    login: string;
    email: string;
    password: string;
    passwordRepeat: string;
}

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            login: "Leigh",
            email: "email@email.com",
            password: "P@ssw0rd!",
            passwordRepeat: "P@ssw0rd!",
        }
    });
    console.log(errors)
    return (
        <form onSubmit={handleSubmit((formData):void => {
            console.log(formData)
        })}>
            <div className="item login">
                <input type={"text"} placeholder={'Логин'} {...register("login", { required: true })} />
                {errors.login ? <span>{errors.login.message}</span> : null}
            </div>
            <div className="item email">
                <input type={"email"} placeholder={'Почта'} {...register("email", { required: true })} />
                {errors.email ? <span>{errors.email.message}</span> : null}
            </div>
            <div className="item password">
                <input
                    type={"password"}
                    placeholder={'Пароль'}
                    {...register("password",{
                            required: true,
                            minLength: {
                                value: 8,
                                message: 'Пароль должен иметь больше 8 символов'
                            },
                            validate: (value) => {
                                return [
                                    /[a-z]/,
                                    /[A-Z]/,
                                    /[0-9]/,
                                ].every((pattern)=>pattern.test(value))
                                    || "Пароль должен состоять из букв и цифр"
                            }
                        })
                    } />
                {errors.password ? <span>{errors.password.message}</span> : null}
            </div>
            <div className="item password passwordRepeat">
                <input type={"password"} placeholder={'Повторите пароль'} {...register("passwordRepeat", { required: true })} />
                {errors.passwordRepeat ? <span>{errors.passwordRepeat.message}</span> : null}
            </div>
            <input type="submit" /> Или <NavLink to={'/auth'}>Авторизуйтесь</NavLink>

        </form>
    );
}
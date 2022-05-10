import React from "react";
import './Register.css'
import { useForm } from "react-hook-form";
import {NavLink} from "react-router-dom";

interface FormData {
    firstName:string;
    secondName:string;
    email: string;
    password: string;
    passwordRepeat: string;
}

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        // defaultValues: {
        //     firstName:"Freddy",
        //     secondName:"Fazbear",
        //     email: "email@email.com",
        //     password: "P@ssw0rd!",
        //     passwordRepeat: "P@ssw0rd!",
        // }
    });
    return (
        <form className={'registration-form'} onSubmit={handleSubmit((formData):void => {
            console.log(formData)
        })}>
            <h1>Регистрация</h1>
            <div className="item_name">

                <div className={'item'}>
                    <input
                        className={errors.secondName ?
                            "item_firstName name-column error error_firstName"
                            : "item_firstName name-column"}
                        type={"text"}
                        placeholder={'Имя*'}
                        {...register("firstName",
                            {
                                required: 'Пожалуйста, введите имя'
                            })}
                    />
                    {errors.firstName ? <span>{errors.firstName.message}</span> : null}
                </div>

                <div className={'item'}>
                    <input
                        className={errors.secondName ?
                            "item_secondName name-column error error_secondName"
                            : "item_secondName name-column"}
                        type={"text"}
                        placeholder={'Фамилия*'}
                        {...register("secondName",
                            {
                                required: 'Пожалуйста, введите фамилию'
                            })}
                    />
                    {errors.secondName ? <span>{errors.secondName.message}</span> : null}
                </div >

            </div>
            <div className={'item'}>
                <input
                    className={errors.email ?
                        "item_email error error_email"
                        : "item_email"}
                    type={"email"}
                    placeholder={'Почта*'}
                    {...register("email",
                        {
                            required: 'Пожалуйста, введите почту'
                        })}
                />
                {errors.email ? <span>{errors.email.message}</span> : null}
            </div>
            <div className={'item'}>
                <input
                    className={errors.password ?
                        "item_password error error_password"
                        : "item_password"}
                    type={"password"}
                    placeholder={'Пароль*'}
                    {...register("password",{
                            required: 'Пожалуйста, введите пароль',
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
                <input
                    className={errors.passwordRepeat ?
                        "item_passwordRepeat error error_password"
                        : "item_passwordRepeat"}
                    type={"password"}
                    placeholder={'Подтвердите пароль*'}
                    {...register("passwordRepeat",
                        {
                            required: 'Пожалуйста, подтвердите пароль'
                        })}
                />
                {errors.passwordRepeat ? <span>{errors.passwordRepeat.message}</span> : null}
            </div>
            <div className="submit">
                <input type="submit" />
                Уже есть аккаунт? <NavLink to={'/auth'}>Авторизуйтесь</NavLink>
            </div>
        </form>
    );
}

import React, {useState} from "react";
import './Register.css'
import { useForm } from "react-hook-form";
import {NavLink} from "react-router-dom";

interface FormData {
    firstName:string;
    secondName:string;
    email: string;
    password: string;
    passwordRepeat: string;
    checkbox: boolean;
}

export default function Register(props: any) {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormData>({
        mode: "onBlur"
    });
    return (
        <form className={'registration-form'} onSubmit={handleSubmit((formData): void => {
            props.register(formData)
        })}>
            <h1>Регистрация</h1>
            <div className="item_reg_name">

                <div className={'item'}>
                    <input
                        className={errors.secondName ?
                            "item_reg_firstName name-column error error_firstName"
                            : "item_reg_firstName name-column"}
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
                            "item_reg_secondName name-column error error_secondName"
                            : "item_reg_secondName name-column"}
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
                        "item_reg_email error error_email"
                        : "item_reg_email"}
                    type={"email"}
                    placeholder={'Почта*'}
                    {...register("email",
                        {
                            required: 'Пожалуйста, введите почту',
                            validate: (value) => {
                                return [
                                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    ].every((pattern)=>pattern.test(value))
                                    || "Пожалуйста, введите корректную почту!"
                            }
                        })}
                />
                {errors.email ? <span>{errors.email.message}</span> : null}
            </div>
            <div className={'item'}>
                <input
                    className={errors.password ?
                        "item_reg_password error error_password"
                        : "item_reg_password"}
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
                                    /([a-z]*[A-Z]*)/,
                                    /[0-9]/,
                                ].every((pattern)=>pattern.test(value))
                                    || "Пароль должен состоять из латинских букв и цифр"
                            }
                        })
                    } />
                {errors.password ? <span>{errors.password.message}</span> : null}
            </div>
            <div className="item password passwordRepeat">
                <input
                    className={errors.passwordRepeat ?
                        "item_reg_passwordRepeat error error_password"
                        : "item_reg_passwordRepeat"}
                    type={"password"}
                    placeholder={'Подтвердите пароль*'}
                    {...register("passwordRepeat",
                        {
                            required: 'Пожалуйста, подтвердите пароль',
                            validate: (value) => {
                                const {password} = getValues();
                                return value === password || "Пароли не совпадают"
                            }
                        })}
                />
                {errors.passwordRepeat ? <span>{errors.passwordRepeat.message}</span> : null}
            </div>

            <div className="input-agree">
                <div className="input-agree-container">
                    <input className={'item_reg_input_agree'} type="checkbox"{...register("checkbox",{
                        required: 'Пожалуйста, отдайте нам свои данные'})
                    }/>
                    <label className={'item_reg_input_agree_label'}>Я полностью доверяю свои данные</label>
                </div>
                {errors.checkbox ? <span>{errors.checkbox.message}</span> : null}
            </div>


            <div className="submit">
                <input type="submit"/>
                Уже есть аккаунт? <NavLink to={'/auth'}>Авторизуйтесь</NavLink>
            </div>
        </form>
    );
}

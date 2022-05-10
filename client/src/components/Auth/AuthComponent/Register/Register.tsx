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
            <div className="item_name" >

                <input className="name-column" type={"text"} placeholder={'Имя*'} {...register("firstName", { required: true })} />
                {errors.firstName ? <span>{errors.firstName.message}</span> : null}

                <input className="name-column" type={"text"} placeholder={'Фамилия*'} {...register("secondName", { required: true })} />
                {errors.secondName ? <span>{errors.secondName.message}</span> : null}

            </div>


            <div >
                <input className="item_email" type={"email"} placeholder={'Почта*'} {...register("email", { required: true })} />
                {errors.email ? <span>{errors.email.message}</span> : null}
            </div>
            <div >
                <input
                    className="item_pswrd"
                    type={"password"}
                    placeholder={'Пароль*'}
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
                <input
                    type={"password"}
                    className="item_pswrd"
                    placeholder={'Подтвердите пароль*'} {...register("passwordRepeat", { required: true })} />
                {errors.passwordRepeat ? <span>{errors.passwordRepeat.message}</span> : null}
            </div>
            <div className="submit"><input type="submit" />
                Уже есть аккаунт? <NavLink to={'/auth'}>Авторизуйтесь</NavLink>
            </div>
        </form>
    );
}

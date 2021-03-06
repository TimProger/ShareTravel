import React from "react";
import './Auth.css'
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}

export default function Auth(props: {
    theme: string;
    login: (data: any) => void
}) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            email: "2email2@mail.ru",
            password: "1q2w3e4r5"
        },
        mode: "onBlur"
    });
    return (
        <form
            className={props.theme === 'light' ? "auth-form auth-form-light" : "auth-form auth-form-dark"}
            onSubmit={handleSubmit((formData): void => {
                props.login(formData)
            }
            )}>
            <h1>Авторизация</h1>
            <div className={'item'}>
                <input
                    className={errors.email ?
                        "item_auth_email error error_email"
                        : "item_auth_email"}
                    type={"email"}
                    placeholder={'Почта'}
                    {...register("email",
                        {
                            required: 'Введите почту'

                        })
                    } />
                {errors.email ? <span>{errors.email.message}</span> : null}
            </div>

            <div className={'item'}>
                <input
                    className={errors.password ?
                        "item_auth_password error error_password"
                        : "item_auth_password"}
                    type={"password"}
                    placeholder={'Пароль'}
                    {...register("password",
                        {
                            required: 'Введите пароль'
                        }
                    )}
                />
                {errors.password ? <span>{errors.password.message}</span> : null}
            </div>
            <div className="submit"><input type="submit" /> Нет аккаунта? <NavLink to={'/registration'}>Зарегистрируйтесь</NavLink></div>
        </form>
    );
}

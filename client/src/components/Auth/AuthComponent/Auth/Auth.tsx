import React from "react";
import './Auth.css'
import { useForm } from "react-hook-form";
import {NavLink} from "react-router-dom";
import {useActions} from "../../../../hooks/useActions";

interface FormData {
    email: string;
    password: string;
}

export default function Auth() {
    const {login} = useActions()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            email: "1email1@mail.ru",
            password: "123321123321"
        },
        mode: "onBlur"
    });
    return (
        <form
            className={'auth-form'}
            onSubmit={handleSubmit((formData):void => {
                login(formData)
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
                        {required: 'Введите пароль'
                        }
                    )}
                />
                {errors.password ? <span>{errors.password.message}</span> : null}
            </div>
            <div className="submit"><input type="submit" /> Нет аккаунта? <NavLink to={'/registration'}>Зарегистрируйтесь</NavLink></div>
        </form>
    );
}
